const User = require("../models/user");

const findByUsername = async (username) => {
  const data = await User.findOne({ username });
  return data;
};

module.exports = {
  findByUsername
};



