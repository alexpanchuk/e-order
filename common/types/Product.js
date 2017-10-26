let T = require("tcomb")
let R = require("ramda")
let { Id, makeId } = require("./Id")
let faker =  require("faker")
let chance = new require("chance")()

const Product = T.struct({
  id: Id,
  name: T.String,
  price: T.Number,
  balance: T.Number,
}, "Product")

const CreateProductForm = T.struct({
  name: T.String,
  price: T.Number,
  balance: T.Number,
}, "CreateProductForm")

const UpdateProductForm = T.struct({
  name: T.maybe(T.String),
  price: T.maybe(T.Number),
  balance: T.maybe(T.Number),
}, "UpdateProductForm")

let makeProduct = (data) => {
  return Product(R.merge({
    id: makeId(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    balance: chance.natural({min: 0, max: 999})
  }, data))
}

exports.Product = Product
exports.CreateProductForm = CreateProductForm
exports.UpdateProductForm = UpdateProductForm
exports.makeProduct = makeProduct