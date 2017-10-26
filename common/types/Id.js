
let T = require("tcomb")

exports.Id = T.refinement(T.String, (id) => {
  return /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/.test(id)
}, "Id")

exports.makeId = require("uuid/v4")
