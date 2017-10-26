let Router = require("koa-router")
let router = new Router()
// customer"s routes
router.get("/customers/:id/orders", require("./customers/read"))
// // product"s routes
router.post("/products", require("./products/create"))
router.get("/products", require("./products/readAll"))
router.get("/products/:id", require("./products/readOne"))
router.patch("/products/:id", require("./products/update"))
router.delete("/products/:id", require("./products/delete"))

module.exports = router