const comprasService = require("../services/comprasService");


const getAllCompras = async (req, res, next) => {

    try{
        const listCompras = await comprasService.getAllCompras();
        res.json(listCompras)
    }
    catch (error){
        next(error)
    }
}

const getOne = async (req, res, next) => {
    try{
        const compra = await comprasService.getOne(req);
        res.status(200).json(compra);
    }
    catch(error){
        next(error)
    }
}

const save = async (req, res, next) => {
    try{
        const compra = comprasService.save(req);
        res.status(201).json(compra)
    }catch (error){
        next(error);
    }
}

const update = async (req, res, next) => {
  try {
    const compra = comprasService.update(req);
    res.status(202).json(compra);
  } catch (error) {
    next(error);
  }
};


module.exports = {
    getAllCompras,
    getOne,
    save,
    update
}