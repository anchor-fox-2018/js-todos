const Controller = require('./controller.js');

class Model {
  constructor() {}

  static getData() {
    const fs = require('fs');
    let dataJson = fs.readFileSync('./data.json');
    let data = JSON.parse(dataJson);
    return data;
  }
  
} // end class model

module.exports = Model
