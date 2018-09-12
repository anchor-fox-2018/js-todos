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
    } else if (option === 'complete') {
      Model.completeData(data, task_content);
      View.completed(data, task_content);
    } else if (option === 'uncomplete') {
      Model.uncompleteData(data, task_content);
      View.uncomplete(data, task_content);
    } else if (option === 'list:outstanding' && task_content === 'asc' || option === 'list:outstanding' && task_content === '') {
      View.sortedAscending(data);
    } else if (option === 'list:outstanding' && task_content === 'desc') {
      View.sortedDescending(data);
    } else if (option === 'list:completed' && task_content === 'asc' || option === 'list:completed' && task_content === '') {
      View.completedAscending(data);
    } else if (option === 'list:completed' && task_content === 'desc') {
      View.completedDescending(data);
    }
  }

} //end class controller

module.exports = Controller
