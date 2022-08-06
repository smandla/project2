const router = require("express").Router();

const { Plant, User, Vote, Comment } = require("../../models");

const withAuth = require("../../utils/auth");

/** Get all plant posts and add to homepage */
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
    console.log("plants", plants);
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json(error);
  }
});

/** Get By ID but withAuth for Homepage*/
router.get("/:id", withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [{ all: true }],
    });
    const plant = plantData.get({ plain: true });
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json(error);
  }
});
//TODO: render add plant form handlebars

/** POST plant by cecespecific user */
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
