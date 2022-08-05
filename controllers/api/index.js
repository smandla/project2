const router = require("express").Router();
const userRoutes = require("./user-routes");
const plantRoutes = require("./plant-routes");

router.use("/user", userRoutes);
router.use("/plants", plantRoutes);

//commentRoutes
//voteRoutes
module.exports = router;
