const router = require("express").Router();

const { Plant, Comment } = require("../models");

const withAuth = require("../utils/auth");
console.log("hello");
/** Get all plant posts and add to homepage */
router.get("/", (req, res) => {
  console.log("wcofe");
  // try {
  //   const plantsData = await Plant.findAll({
  //     include: [{ model: Comment }],
  //   });
  //   const plants = plantsData.map((plant) => {
  //     plant.get({ plain: true });
  //   });
  //   res.status(200).json(plants);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
  res.status(200).send("hello");
});
module.exports = router;
