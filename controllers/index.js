const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const userDashboardRoutes = require("./userdashboard-routes");

router.use("/", homeRoutes);
router.use("/userdashboard", userDashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
