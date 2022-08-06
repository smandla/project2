const router = require("express").Router();

const { Plant, Comment } = require("../models");

const withAuth = require("../utils/auth");
console.log("hello");

/** TODO: Render plants to homepage */

// TODO: Render single plants to details page and show all comments

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
module.exports = router;
