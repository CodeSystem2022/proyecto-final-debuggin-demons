const User = require("../models/user");

const getOne = async (username) => {
    const user = await User.findOne({ username });
    return user;
};

const findByUsername = async (username) => {
    const data = await User.findOne({ username });
    return data;
};

module.exports = {
    getOne,
    findByUsername,
};

