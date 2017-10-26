let R = require("ramda")
let router = require("../router")
let KoaValidation = require("../../middlewares/validation.js")
let { makeId } = require("../../../common/types/Id")
let { CreateOrderForm } = require("../../../common/types/Order")
let db = require("../../db")

router.post("/orders",
  KoaValidation({
    "body": CreateOrderForm
  }),

  async (ctx, next) => {
    let { body: orderForm } = ctx.request

    if (!db.users[orderForm.customerId]
      || !db.users[orderForm.managerId]) {
      ctx.throw(400)
    }

    let id = makeId()
    let date = new Date()

    let order = R.merge(orderForm, {
      date,
      status: "inprogress"    
    })

    db.orders[id] = order

    ctx.status = 201
    ctx.set("Location", `/orders/${id}`)
    ctx.response.body = {
      data: R.merge(order, { id })
    }

    await next()
  }
)
// 47f70b84-74c0-43e4-a0ab-ba55cccdd1ae
// 1dce8466-c9c3-433e-b851-782ac8b4d45e