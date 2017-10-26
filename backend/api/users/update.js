let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { Id } = require("../../../common/types/Id")
let { UserForm } = require("../../../common/types/User")
let db = require("../../db")

router.patch("/users/:id", 
  KoaValidation({
    "params.id": Id,
    "body": UserForm
  }),
  
  async (ctx, next) => {
    let { body: userForm } = ctx.request
    let id = ctx.params.id

    if (R.isEmpty(userForm)) {
      ctx.throw(400)
    }

    if (!db.users[id]) {
      ctx.throw(404)
    }

    db.users[id] = R.merge(db.users[id], userForm)

    ctx.status = 204

    await next()
  }
)
