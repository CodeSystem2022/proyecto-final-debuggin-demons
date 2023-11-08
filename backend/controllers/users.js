const User = require("../models/user");


const findByUsername = async (username) => {
    const data = await User.findOne({ username });
    return data;
};

const getOne = async (username) => {
    const user = await User.findOne({ username });
    return user;
};

module.exports = {
    getOne,
    findByUsername,
};

