const { Plant } = require("../models");
const withAuth = require("../utils/auth");

const router = require("express").Router();

//post new plant
router.post("/addPlant", withAuth, async (req, res) => {
  try {
    const plantData = await Plant.create({
      title: req.body.title,
      plant_img: req.body.plant_img,
      upkeep: req.body.upkeep,
      toxicity: req.body.toxicity,
      water: req.body.water,
      sun_amount: req.body.sun_amount,
      difficulty: req.body.difficulty,
      problem: req.body.problem,
      user_id: req.session.user_id,
    });
    res.status(200).json(plantData);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
