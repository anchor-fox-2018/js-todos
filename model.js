const Controller = require('./controller.js');
const fs = require('fs');
let dataJson = fs.readFileSync('./data.json');
let data = JSON.parse(dataJson);

class Model {
  constructor() {}

  static getData() {
    return data;
  }

  static addData(task_content) {
    data.push({"task" : task_content});
    let finalData = JSON.stringify(data, null, 2);
    fs.writeFileSync('./data.json', finalData, 'utf8');
  }

} // end class model

module.exports = Model
