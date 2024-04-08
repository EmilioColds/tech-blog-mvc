const { User } = require('../models');

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

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;