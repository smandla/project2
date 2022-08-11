const router = require("express").Router();

const { Plant, Comment, Vote, User } = require("../models");

const withAuth = require("../utils/auth");



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

    
    
    res.render("feed", {
      plants,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/askAdvice", withAuth, (req, res) => {
  res.render("plant-form", { loggedIn: req.session.loggedIn });
});

router.get("/yourplants", withAuth, async (req, res) => {
  
  try {
    const plantsDataByUser = await Plant.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Comment,
          include: [{ model: Vote }],
        },
      ],
    });
    const plantsByUser = plantsDataByUser.map((plant) =>
      plant.get({ plain: true })
    );
    
    res.render("user-plants", {
      plantsByUser,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
      
    });
    
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

router.get("/plants/:id", withAuth, async (req, res) => {
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
    
    res.render("plantdetails", { plant, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
