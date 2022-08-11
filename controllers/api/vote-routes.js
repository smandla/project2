const router = require("express").Router();

const { Plant, User, Comment, Vote } = require("../../models");

const withAuth = require("../../utils/auth");
router.post("/addVote", async (req, res) => {
  
  try {
    const voteData = await Vote.create({
      voted: !req.body.voted,
      user_id: req.session.user_id,
      comment_id: req.params.id,
    });
    
    const vote = req.body.voted === true ? vote + 1 : vote - 1;
   
    res.status(200).json(voteData);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
