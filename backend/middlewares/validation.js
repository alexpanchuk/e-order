let R = require("ramda")
let T = require("tcomb")
let fromJSON = require("tcomb/lib/fromJSON")
let {validate} = require("tcomb-validation")

module.exports = function (opts={}) {
  // возвращаем async function, которую будем использовать в качестве middleware
  return async function validationMiddleware(ctx, next) {
    ctx.request.params = ctx.params
    // переданый объект представляет собой пару:
    // key - строковое представление пути к свойству (1)
    // value - объект описывающий тип данных (tcomb) для значение 1
    for (let key of R.keys(opts)) {
      let type = opts[key]
      // создаем линзу из строкового представления пути
      let lens = R.lensPath(key.split("."))
      // считываем значение по линзе в объекте запроса
      let data = R.view(lens, ctx.request)
      try {
        // переписываем ctx.request применяя дополнительный парсинг с помощью fromJSON (функции парсинга описаны в .fromJSON для нужного типа данных (T.Date, T.Boolean, см. common/types/Date.js or Boolean.js), одновременно проводя валидацию данных согласно переданному типу
        ctx.request = R.set(lens, fromJSON(data, type), ctx.request)
      } catch (err) {
        // обрабатываем ошибку от вызова fromJSON (несоответвие типа)
        let result = validate(data, type)
        // пробрасываем выше с текстом от tcomb
        ctx.throw(400, result.firstError().message)

      }
    }
    return await next()
  }
}