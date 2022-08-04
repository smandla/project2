const router = require("express").Router();

const { Plant, Comment } = require("../models");

const withAuth = require("../utils/auth");
console.log("hello");
/** Get all plant posts and add to homepage */
router.get("/", async (req, res) => {
  try {
    const plantsData = await Plant.findAll({
      include: [{ all: true }],
    });
    const plants = plantsData.map((plant) => plant.get({ plain: true }));
    console.log("plants", plants);
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json(error);
  }
});

/** Get By ID but withAuth */
router.get("/plant/:id", withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });
    const plant = plantData.get({ plain: true });
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
