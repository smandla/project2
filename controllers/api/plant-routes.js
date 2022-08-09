const router = require("express").Router();

const { Plant, User, Comment, Vote } = require("../../models");

const withAuth = require("../../utils/auth");

/** Get By ID but withAuth for Homepage*/
router.get("/:id", withAuth, async (req, res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [{ model: Vote }, { model: User, attributes: ["username"] }],
        },
        { model: User, attributes: ["username"] },
      ],
    });
    const plant = plantData.get({ plain: true });
    // res.status(200).json(plant);
    res.render("plantdetails", { plant, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});

/** POST plant by specific user */
router.post("/addPlant", withAuth, async (req, res) => {
  try {
    const plantData = await Plant.create({
      title: req.body.title,
      plant_img: req.body.plant_img,
      upkeep: null,
      toxicity: null,
      water: null,
      sun_amount: null,
      difficulty: null,
      problem: req.body.problem,
      user_id: req.session.user_id,
    });
    res.status(200).json(plantData);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
