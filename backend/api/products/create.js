let R = require("ramda")
let KoaValidation = require("../../middlewares/validation.js")
let { makeId } = require("../../../common/types/Id")
let { CreateProductForm } = require("../../../common/types/Product")
let db = require("../../db")

module.exports = R.compose(
// создание продукта
  async (ctx, next) => {
    let { body: productForm } = ctx.request
    let id = makeId()

    let product = R.merge(productForm, { id })

    db.products[product.id] = productForm

    ctx.status = 201
    ctx.set("Location", `/products/${id}`)
    ctx.response.body = {
      data: product
    }

    await next()
  },
// валидация входных данных
  KoaValidation.bind(null, {
    "body": CreateProductForm
  }),
)