const userRepository =  require("../repositories/usuariosRepository")


const getAllUsers = async (req) => {
    const listUsuarios = userRepository.getAllUsers();
    return listUsuarios
}

const getOne = async (req) => {
  const user = await userRepository.getOne(req);
  return user;
};

const save = async (req) => {
    const user = await userRepository.save(req);
    return user;
}

const update =  async (req) => {
    const user =  await userRepository.update(req)
    return user;
}



module.exports = {
  getAllUsers,
  getOne,
  save,
  update
};