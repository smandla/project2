const router = require("express").Router();

const { Plant, Comment, Vote, User } = require("../models");

const withAuth = require("../utils/auth");
console.log("hello");

/** TODO: Render plants to homepage */
router.get("/", async (req, res) => {
  try {
    const plantsData = await Plant.findAll({
      include: [
        {
          model: Comment,
          include: [{ model: Vote }, { model: User, attributes: ["username"] }],
        },
        { model: User, attributes: ["username"] },
      ],
    });
    const plants = plantsData.map((plant) => plant.get({ plain: true }));
    // console.log(plants.comments[0].comment_text)
    // res.status(200).json(plants)
    res.render("feed", {plants, loggedIn:req.session.loggedIn});
    console.log("plants", plants);
  } catch (error) {
    res.status(500).json(error);
  }

});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
module.exports = router;
