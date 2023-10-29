const compraRepository =  require("../repositories/comprasRepository")


const getAllCompras = async (req) => {
    const listCompras = compraRepository.getAllCompras();
    return listCompras;
}

const getOne = async (req) => {
  const compra = await compraRepository.getOne(req);
  return compra;
};

const save = async (req) => {
    const compra = await compraRepository.save(req);
    return compra;
}

const update =  async (req) => {
    const compra =  await compraRepository.update(req)
    return compra;
}



module.exports = {
  getAllCompras,
  getOne,
  save,
  update
};