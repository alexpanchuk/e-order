let Koa = require("koa")
let koaBody = require("koa-body")
let serve = require("koa-static")
let mount  = require("koa-mount")
let logger = require("koa-logger")
let db = require("./db")
let router = require("./api/router")
// user"s routes
require("./api/users/create")
require("./api//users/read")
require("./api//users/update")
require("./api//users/delete")
// order"s routes
require("./api//orders/create")
require("./api//orders/read")
require("./api//orders/update")

let app = new Koa()

app.use(logger())
app.use(koaBody())
app.use(router.routes())

app.listen(3000, () => console.log("Koa on port 3000"))
