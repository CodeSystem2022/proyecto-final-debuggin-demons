const usuariosService = require("../services/users");


const register = async (req, res, next) => {
    try{
        const user = usuariosService.save(req.body);
        res.status(201).json(user)
    }catch (error){
        next(error);
    }
}


module.exports = {
    register,
    
}