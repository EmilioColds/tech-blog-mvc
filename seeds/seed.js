const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: "Emilio",
        password: "123"
    },
    {
        username: "Not Emilio",
        password: "456"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;