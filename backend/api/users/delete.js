let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let db = require("../../db")

router.delete("/users/:id",
  KoaValidation({
    "params.id": Id
  }),

  async (ctx, next) => {
    let id = ctx.params.id

    if (!db.users[id]) {
      ctx.throw(404)
    }

    delete db.users[id]

    ctx.status = 204

    await next()
  }
)
