const usuariosService = require("../services/usuariosService");


const getAllUsers = async (req, res, next) => {

    try{
        const listUsuarios = await usuariosService.getAllUsers();
        res.json(listUsuarios)
    }
    catch (error){
        next(error)
    }
}

const getOne = async (req, res, next) => {
    try{
        const user = await usuariosService.getOne(req);
        res.status(200).json(user);
    }
    catch(error){
        next(error)
    }
}

const save = async (req, res, next) => {
    try{
        const user = usuariosService.save(req);
        res.status(201).json(user)
    }catch (error){
        next(error);
    }
}

const update = async (req, res, next) => {
  try {
    const user = usuariosService.update(req);
    res.status(202).json(user);
  } catch (error) {
    next(error);
  }
};


module.exports = {
    getAllUsers,
    getOne,
    save,
    update
}