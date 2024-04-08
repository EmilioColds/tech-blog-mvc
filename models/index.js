const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./user');
const Post = require('./posts');

User.hasMany(Post, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'userID',
});

module.exports = { sequelize, User, Post };