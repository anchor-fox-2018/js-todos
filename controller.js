const Model = require('./model.js');
const View = require('./view.js');

class Controller {
  controller() {}

  static todoMenu(option, task_content) {
    let data = Model.getData();

    if (option === 'help') {
      View.help();
    } else if (option === 'list') {
      View.list(data);
    } else if (option === 'add') {
      Model.addData(task_content);
      View.add(task_content);
    } else if (option === 'findById') {
      View.contentById(data, task_content);
    } else if (option === 'delete') {
      View.delete(data, task_content);
      Model.deleteData(data, task_content);
    }
  }

} //end class controller

module.exports = Controller
