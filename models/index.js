// import models
const Plant = require("./Plant");
const Comment = require("./Comment");
const User = require("./User");
const Vote = require("./Vote");

Plant.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Plant, {
  foreignKey: "user_id",
});

Comment.belongsTo(Plant, {
  through: Plant,
  foreignKey: "plant_id",
});
Plant.hasMany(Comment, {
  foreignKey: "plant_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Vote.belongsTo(Comment, {
  through: Comment,
  foreignKey: "comment_id",
});

Comment.hasMany(Vote, {
  foreignKey: "comment_id",
});
User.hasMany(Vote, {
  foreignKey: "user_id",
});
Vote.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = {
  Plant,
  User,
  Comment,
  Vote,
};
