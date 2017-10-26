let T = require("tcomb")
let R = require("ramda")
let { Id, makeId } = require("./Id")
let faker = require("faker")
// let chance = require("chance")
// let { Email } = require("../common/types/Email")

let UserRole = T.enums.of("admin manager customer", "UserRole")

let User = T.struct({
  id: Id,
  role: UserRole,
  fullname: T.String,
}, "User")

let CreateUserForm = T.struct({
  fullname: T.String,
}, "CreateUserForm")

let makeAdmin = (data) => {
  return User(R.merge({
    id: makeId(),
    role: "admin",
    fullname: faker.name.findName(),
  }, data))
}

let makeManager = (data) => {
  return User(R.merge({
    id: makeId(),
    role: "manager",
    fullname: faker.name.findName(),
  }, data))
}

let makeCustomer = (data) => {
  return User(R.merge({
    id: makeId(),
    role: "customer",
    fullname: faker.name.findName(),
  }, data))
}

exports.User = User
exports.CreateUserForm = CreateUserForm
exports.UserRole = UserRole
exports.makeAdmin = makeAdmin
exports.makeManager = makeManager
exports.makeCustomer = makeCustomer
