let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let db = require("../../db")

module.exports = R.compose(
  async (ctx, next) => {
    let id = ctx.params.id

    if (!db.products[id]) {
      ctx.throw(404)
    }

    delete db.products[id]

    ctx.status = 204

    await next()
  },

  KoaValidation.bind(null, {
    "params.id": Id
  }),
)
