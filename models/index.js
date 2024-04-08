const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./user');
const Post = require('./posts');

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Post.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = { sequelize, User, Post };