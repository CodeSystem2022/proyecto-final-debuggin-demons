const User = require("../models/userModel")


// req -> [body(oculto), params(/), query(?)]


const getAllUsers = async () => {
      const todos = await User.find();
      return todos;  
}

const getOne = async (req) => {
  const id = req.params.id;
  const user = await User.findById(id);
  console.log(user);
  return user;
};

const save =  async (req) => {
    const { body } = req;
    const newUser = new User(body);
    const user = await newUser.save();
    return user;
}

const update = async (req) => {
  const id = req.params.id;
  const { body } = req;
  const updateUser = new User(body);
  const user = await User.updateOne({ _id: id }, updateUser);
  return user;
};


module.exports = {
    getAllUsers,
    getOne,
    save,
    update,
}