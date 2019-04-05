const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  codigorfid: { type: String, required: true },
  setor: { type: String, required: true },
})


module.exports = restful.model('UserData', userSchema)
