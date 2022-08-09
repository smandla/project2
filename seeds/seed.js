const sequelize = require("../config/connection");
const { User, Plant } = require("../models");

const userData = require("./userData.json");
const plantSeedData = require("./plantSeed.js");
const commentSeedData = require("./commentSeed.js");
const voteSeedData = require("./voteSeed.js");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await plantSeedData();
  await commentSeedData();
  await voteSeedData();

  process.exit(0);
};

seedDatabase();
