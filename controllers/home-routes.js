const router = require("express").Router();

const { Plant, Comment, Vote, User } = require("../models");

const withAuth = require("../utils/auth");
console.log("hello");

/** TODO: Render plants to homepage */
router.get("/", async (req, res) => {
  try {
    const plantsData = await Plant.findAll({
      include: [{ all: true }],
    });
    const plants = plantsData.map((plant) => plant.get({ plain: true }));

    // res.status(200).json(plants)
    console.log("plants", plants.comments);
    res.render("feed", { plants, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/askAdvice", (req, res) => {
  res.render("plant-form", { loggedIn: req.session.loggedIn });

});
router.get("/yourplants", withAuth, async (req, res) => {
  console.log(req.sessionu);
  try {
    const plantsDataByUser = await Plant.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const plantsByUser = plantsDataByUser.map((plant) =>
      plant.get({ plain: true })
    );
    console.log(plantsByUser);
    res.render("user-plants", {
      plantsByUser,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
    // res.status(200).json(plantsByUser);
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
