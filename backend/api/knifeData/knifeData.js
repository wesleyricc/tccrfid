const restful = require('node-restful')
const mongoose = restful.mongoose

const knifeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  codigorfid: { type: String, required: true },
  local: { type: String, required: true },
  estado: { type: String, required: true },
  montagens: { type: String, required: true },
  categoria: { type: String, required: true },
})


module.exports = restful.model('KnifeData', knifeSchema)
