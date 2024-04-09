const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: "Emilio",
        password: bcrypt.hashSync("123", 10)
    },
    {
        username: "Not Emilio",
        password: bcrypt.hashSync("456", 10)
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;