let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let db = require("../../db")

router.get("/users", async (ctx, next) => {
  ctx.status = 200
  ctx.response.body = db.users

  await next()
})

router.get("/users/:id",
  KoaValidation({
    "params.id": Id
  }),

  async (ctx, next) => {
    let id = ctx.params.id

    if (!db.users[id]) {
      ctx.throw(404)
    }

    // добавляем id внутрь объекта заказа
    let response = R.merge(db.users[id], { id })

    ctx.status = 200
    ctx.response.body = response

    await next()
  }
)