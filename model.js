const fs = require('fs')
let dataJson = fs.readFileSync('./data.json')
let data = JSON.parse(dataJson)

const Controller = require('./controller.js')

class Model {
  constructor() {}
}

module.exports = Model
