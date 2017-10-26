let router = require("../router")
let R = require("ramda")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let { UpdateOrderForm } = require("../../../common/types/Order")
let db = require("../../db")

router.patch("/orders/:id",
  KoaValidation({
    "params.id": Id,
    "body": UpdateOrderForm
  }),
  
  async (ctx, next) => {
    // по запросу обновляется только статус заказ
    let { body: orderForm } = ctx.request
    let id = ctx.params.id

    if (!orderForm["status"]) {
      ctx.throw(400)
    }

    if (!db.orders[id]) {
      ctx.throw(404)
    }

    db.orders[id] = R.merge(db.orders[id], orderForm)

    ctx.status = 204

    await next()
  }
)
