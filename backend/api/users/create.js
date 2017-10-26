let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { makeId } = require("../../../common/types/Id")
let { CreateUserForm, UserRole } = require("../../../common/types/User")
let db = require("../../db")

router.post("/users/:role",
  KoaValidation({
    "params.role": UserRole,
    "body": CreateUserForm
  }),

  async (ctx, next) => {

    let { body: userForm } = ctx.request
    let id = makeId()

    let user = R.merge(userForm, {
      id,
      role: ctx.params.role
    })

    db.users[user.id] = userForm

    ctx.status = 201
    ctx.set("Location", `/users/${id}`)
    ctx.response.body = {
      data: user
    }
    await next()
  }

)
