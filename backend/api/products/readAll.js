let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let db = require("../../db")

module.exports = async (ctx, next) => {
  ctx.status = 200
  ctx.response.body = db.products

  await next()
}
