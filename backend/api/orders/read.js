let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let db = require("../../db")

router.get("/orders", async (ctx, next) => {
  ctx.status = 200
  ctx.response.body = db.orders

  await next()
})

router.get("/orders/:id",
  KoaValidation({
    "params.id": Id
  }),

  async (ctx, next) => {
    let id = ctx.params.id

    if (!db.orders[id]) {
      ctx.throw(404)
    }

    // добавляем id внутрь объекта заказа
    let response = R.merge(db.orders[id], { id })

    ctx.status = 200
    ctx.response.body = response

    await next()
  }
)

