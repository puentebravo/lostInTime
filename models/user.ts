const { Model, DataTypes } = require("Sequelize");
const { sequelize } = require(".");

const Post: typeof Model= sequelize.define("Post", {
  id: {
    type: DataTypes.CHAR,
    unique: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tags: {
    type: DataTypes.CHAR,
    defaultValue: "Uncategorized"
  },
});

module.exports = Post;
