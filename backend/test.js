let faker =  require("faker")
let R = require("ramda")

let foo1 = () => { console.log("foo 1") }
let foo2 = () => { console.log("foo 2") }

let compose = R.compose(foo1, foo2)

compose()