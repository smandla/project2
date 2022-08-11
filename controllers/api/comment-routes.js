const router = require("express").Router();

const { Plant, User, Comment, Vote } = require("../../models");
const voteRoutes = require("./vote-routes");
const withAuth = require("../../utils/auth");

router.get("/:plant_id/comments", withAuth, async (req, res) => {
  
  try {
    const commentsData = await Comment.findAll({
      where: {
        plant_id: req.params.plant_id,
      },
      include: [{ model: Vote }],
    });
    const commentData = commentsData.map((commentData) =>
      commentData.get({ plain: true })
    );
    res.status(200).json(commentData);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.post("/:id/addComment", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_text: req.body.comment_text,
      voteCount: 0,
      user_id: req.session.user_id,
      plant_id: req.params.id,
    });
    
    res.status(200).json(commentData);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.post("/:id/votes/addVote", async (req, res) => {
  try {
    const dataV = await Vote.findOne({
      where: {
        comment_id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!dataV) {
      const voteData = await Vote.create({
        voted: req.body.voted,
        user_id: req.session.user_id,
        comment_id: req.params.id,
      });
      res.status(200).json({ like: true, voteData });
    } else {
      const destroyData = await Vote.destroy({ where: dataV.dataValues });
      res.status(200).json({ like: false, destroyData });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
