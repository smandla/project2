const router = require("express").Router();

const { Plant, User, Comment, Vote } = require("../../models");

const withAuth = require("../../utils/auth");
router.post("/addVote", async (req, res) => {
  console.log(req.params.id);
  try {
    const voteData = await Vote.create({
      voted: !req.body.voted,
      user_id: req.session.user_id,
      comment_id: req.params.id,
    });
    console.log(voteData);
    const vote = req.body.voted === true ? vote + 1 : vote - 1;
    // const updateCommentVoteCount = await Comment.update(
    //   { voteCount: vote },
    //   {
    //     where: {
    //       id: req.params.id,
    //     },
    //   }
    // );

    res.status(200).json(voteData);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
