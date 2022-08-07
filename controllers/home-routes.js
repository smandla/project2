const router = require("express").Router();

const { Plant, Comment } = require("../models");

const withAuth = require("../utils/auth");
console.log("hello");

/** TODO: Render plants to homepage */
router.get("/", (req, res) => {
  const plantData = await Plant.findAll().catch((err) => {
    res.json(err)
  })
  const plants = plantData.map((plant) => plant.get({plain: true}))
  res.render("feed", {plants});
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
module.exports = router;
