let R = require("ramda")
let db = require("../../db")

module.exports = async (ctx, next) => {
  let requestId = ctx.params.id

  if (!db.users[requestId]) {
    ctx.throw(404)
  }

  if (!db.users[requestId].role == "customer") {
    ctx.throw(403)
  }

  let response = {}

  for (let key in db.orders) {
    if (db.orders[key].customerId == requestId) {
      response[key] = db.orders[key]
    }    
  }

  if (R.isEmpty(response)) {
    ctx.throw(404)
  }

  ctx.status = 200
  ctx.response.body = response

  await next()
}