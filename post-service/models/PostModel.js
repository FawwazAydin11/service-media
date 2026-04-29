const { DataTypes } = require('sequelize');
const db = require('../config/Database');

const Post = db.define('posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  media_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  freezeTableName: true
});

module.exports = Post;