const User = require("../models/user");

const getAll = async () => {
  const data = await Models.Users.findAll({
    attributes: ["firstName", "email", "image"],
  });
  return data;
};

const add = async (body) => {
  const data = await User.create(body);

  return data;
};

const getCarrito = async (username) => {
  const usuario = await User.findOne({ username });
  const carrito = usuario.carrito;
  return carrito;
};

const clear = async (username) => {
     try {
       await User.findOneAndUpdate(
         { username },
         { $set:  {carrito  : []} }
       );
     } catch (error) {
       return error;
     }
};


const remove = async (id) => {
  await User.destroy({ where: { username: username } });
  return true;
};

const removeOne = async (req) => {
  const {username, videojuego} =  req.params;
   try {
     await User.findOneAndUpdate(
       { username },
       { $pull: { carrito: videojuego } }
     );
   } catch (error) {
     return error;
   }
};

const update = async (username, changes) => {
  const userUpdate = await User.update(
    { nombre: changes.nombre, apellido: changes.apellido },
    {
      where: {
        username: username,
      },
    }
  );
  return userUpdate;
};


const save = async (req) => {
  const { username, videojuego } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { username : username },
      { $push: { carrito: videojuego } }
    );
    return user;
    
  } catch (error) {
    return error;
  }
};

module.exports = {
  save,
  getAll,
  remove,
  removeOne,
  update,
  clear,
  getCarrito
};
