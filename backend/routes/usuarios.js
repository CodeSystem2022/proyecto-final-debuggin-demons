const express =  require("express")
const router = express.Router()


const usuariosController = require("../controllers/usuariosController");


router.get("/users", usuariosController.getAllUsers);
router.get("/users/:id", usuariosController.getOne);
router.put("/users/:id", usuariosController.update);
router.post("/users", usuariosController.save);


// router.delete("/user/id", () => {});
// router.put("/user/{id}", () => {});
// router.patch("/user/{id}", () => {});


module.exports = router