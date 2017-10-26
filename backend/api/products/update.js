let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let { UpdateProductForm } = require("../../../common/types/Product")
let db = require("../../db")

module.exports = R.compose(
  async (ctx, next) => {
    let { body: productForm } = ctx.request
    let id = ctx.params.id

    if (R.isEmpty(productForm)) {
      ctx.throw(400)
    }

    if (!db.products[id]) {
      ctx.throw(404)
    }

    db.products[id] = R.merge(db.products[id], productForm)
    ctx.status = 204

    await next()
  },

  KoaValidation.bind(null, {
    "params.id": Id,
    "body": UpdateProductForm
  })
  
)
