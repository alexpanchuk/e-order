let T = require("tcomb")
let { Id } = require("./Id")
let { Product } = require("./Product")
require("./Date")

let Item = T.struct({
  productId: Id,
  amount: T.Number,
}, "Item")

let Order = T.struct({
  id: Id,
  date: T.Date,
  customerId: Id,
  managerId: Id,
  isComplete: T.Boolean,
  items: T.list(Item)
}, "Order")

let CreateOrderForm = T.struct({
  customerId: Id,
  managerId: Id,
  items: T.list(Item)
}, "CreateOrderForm")

let UpdateOrderForm = T.struct({
  isComplete: T.Boolean,
}, "UpdateOrderForm")

exports.Order = Order
exports.UpdateOrderForm = UpdateOrderForm
exports.CreateOrderForm = CreateOrderForm