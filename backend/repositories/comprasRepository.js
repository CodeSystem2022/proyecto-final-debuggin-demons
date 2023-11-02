const Compra = require("../models/compraModel")


// req -> [body(oculto), params(/), query(?)]


const getAllCompras = async () => {
      const todos = await Compra.find();
      return todos;  
}

const getOne = async (req) => {
  const id = req.params.id;
  const compra = await Compra.findById(id);
  console.log(compra);
  return compra;
};

const save =  async (req) => {
    const { body } = req;
    const newCompra = new Compra(body);
    const compra = await newCompra.save();
    return compra;
}

const update = async (req) => {
  const id = req.params.id;
  const { body } = req;
  const updateCompra = new Compra(body);
  const compra = await Compra.updateOne({ _id: id }, updateCompra);
  return compra;
};


module.exports = {
    getAllCompras,
    getOne,
    save,
    update,
}