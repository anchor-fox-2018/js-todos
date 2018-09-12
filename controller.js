const Model = require('./model.js');
const View = require('./view.js');

class Controller {
  controller() {}

  static todoMenu(option) {
    if (option === 'help') {
      View.help();
    } else {
      return 'There\'s an error in the system'
    }
  }
}

module.exports = Controller
