const express =  require("express")
const router = express.Router()


const comprasController = require("../controllers/comprasController");


router.get("/compras", comprasController.getAllCompras);
router.get("/compras/:id", comprasController.getOne);
router.put("/compras/:id", comprasController.update);
router.post("/compras", comprasController.save);


// router.delete("/user/id", () => {});
// router.put("/user/{id}", () => {});
// router.patch("/user/{id}", () => {});


module.exports = router