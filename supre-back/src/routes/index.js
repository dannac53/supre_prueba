const router = require("express").Router();
const cliente = require("../controllers/index");

router.get("/", cliente.getAll);
router.get("/:id", cliente.findById);
router.post("/", cliente.create);
router.put("/", cliente.update);
router.delete("/:id", cliente.deleteById);

module.exports = router;
