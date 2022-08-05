const router = require("express").Router();
const userRoutes = require("./user-routes");
const plantRoutes = require("./plant-routes");
const commentRoutes = require("./comment-routes");

router.use("/user", userRoutes);
router.use("/plants", plantRoutes);
router.use("/comments", commentRoutes);

//commentRoutes
//voteRoutes
module.exports = router;
