let T = require("tcomb")
let format = require("date-fns/format")

T.Date.fromJSON = x => {
  if (typeof x === "string") {
    return new Date(x)
  } else {
    return x
  }
}

function secPrecisionDate(d) {
  return format(d, "YYYY-MM-DD HH:mm:ss")
}

function minPrecisionDate(d) {
  return format(d, "YYYY-MM-DD HH:mm")
}

function dayPrecisionDate(d) {
  return format(d, "YYYY-MM-DD")
}

function secPrecisionTime(d) {
  return format(d, "HH:mm:ss")
}

function minPrecisionTime(d) {
  return format(d, "HH:mm")
}

exports.secPrecisionDate = secPrecisionDate
exports.minPrecisionDate = minPrecisionDate
exports.dayPrecisionDate = dayPrecisionDate
exports.secPrecisionTime = secPrecisionTime
exports.minPrecisionTime = minPrecisionTime

