const User = require("../models/user");

const create = async (body) => {
    const data = await User.create(body);
    return data;
  };

  module.exports = {
    create,
    
  };