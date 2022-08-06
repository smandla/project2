const router = require("express").Router();

const { User, Plant, Comment, Vote } = require("../../models");

/** POST Create a new user */
router.post("/", async (req, res) => {
  console.log("heEIYVGFERVFRllo");
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    const data = userData.get({ plain: true });
    console.log(data);
    req.session.save(() => {
      req.session.user_id = data.id;
      req.session.user = data.username;
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/** Login User */
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }
    const data = userData.get({ plain: true });
    const validPassowrd = userData.checkPassword(req.body.password);

    if (!validPassowrd) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = data.id;
      req.session.user = data.username;
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/** Get plants for specific user*/
router.get("/plants", async (req, res) => {
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
    res.status(200).json(plantsByUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

/** Logout */
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
