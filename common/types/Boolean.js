let T = require("tcomb")

T.Boolean.fromJSON = x => {
  if (x == 1 || x == "true") return true
  if (x == 0 || x == "false") return false
}