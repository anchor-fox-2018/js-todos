class View {
  constructor() {}

  static help() {
    console.log('Choose one of the following options:');
    console.log('-------------------------------------------------------');
    console.log('list: to show all your todo list');
    console.log('add <task_content>: to add a todo list');
    console.log('findById <task_id>: to find todo list by id');
    console.log('delete <task_id>: to delete todo list by id');
    console.log('complete <task_id>: to mark todo list as complete');
    console.log('uncomplete <task_id>: to mark todo list as uncomplete');
  }

  static list(data) {
    for (var i = 0; i < data.length; i++) {
      console.log(`${i+1}. ${data[i].task}`);
    }
  }
  
} //end class View

module.exports = View
