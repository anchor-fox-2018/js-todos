const Model = require('./model.js');
const View = require('./view.js');

class Controller {
  controller() {}

  static todoMenu(option) {
    let data = Model.getData();

    if (option === 'help') {
      View.help();
    } else if (option === 'list') {
      View.list(data);
    }
  }
  
} //end class controller

module.exports = Controller
