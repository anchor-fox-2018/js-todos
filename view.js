class View {
  constructor() {}

  static help() {
    console.log('Choose one of the following options:');
    console.log('-------------------------------------------------------');
    console.log('list                      ---> to show all your todo list');
    console.log('add <task_content>        ---> to add a todo list');
    console.log('findById <task_id>        ---> to find todo list by id');
    console.log('delete <task_id>          ---> to delete todo list by id');
    console.log('complete <task_id>        ---> to mark todo list as complete');
    console.log('uncomplete <task_id>      ---> to mark todo list as uncomplete');
    console.log('list:outstanding asc|desc ---> to show todo list based on created bate');
    console.log('list:completed asc|desc   ---> to show to do list completed in asc or desc order');
    console.log('tag <task_id> <tag_name>  ---> to add tag');
    console.log('filter: <tag_name>        ---> to filter list by tag_name');
  }

  static list(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i]['completed'] === true) {
        console.log(`${i+1}. [x] ${data[i]['task']}`);
      } else {
        console.log(`${i+1}. [ ] ${data[i]['task']}`);
      }
    }
  }

  static add(task_content) {
    console.log(`"${task_content}" added`);
  }

  static contentById(data, id) {
    let taskId = Number(id - 1);
    console.log(`${id}. ${data[taskId]['task']}`);
  }

  static delete(data, task_content) {
    console.log(`Deleted "${data[Number(task_content - 1)]['task']}" from your todo list...`);
  }

  static completed(data, id) {
    let taskId = Number(id - 1);
    console.log(`"${data[taskId]['task']}" marked as complete`);
  }

  static uncomplete(data, id) {
    let taskId = Number(id - 1);
    console.log(`"${data[taskId]['task']}" marked as uncomplete`);
  }

  static sortedAscending(data) {
    let sorted = data.sort((a, b) => a['created_date'] > b['created_date']);
    console.log(`Sorted from oldest to newest:`);
    for (var i = 0; i < sorted.length; i++) {
      console.log(`${i+1}. ${sorted[i]['task']}`);
    }
  }

  static sortedDescending(data) {
    let sorted = data.sort((a, b) => a['created_date'] < b['created_date']);
    console.log(`Sorted from newest to oldest:`);
    for (var i = 0; i < sorted.length; i++) {
      console.log(`${i+1}. ${sorted[i]['task']}`);
    }
  }

  static completedAscending(data) {
    let filter = data.filter(element => element['completed'] === true);
    let sorted = filter.sort((a, b) => a['created_date'] > b['created_date']);
    console.log(`Sorted completed task from oldest to newest:`);
    for (var i = 0; i < sorted.length; i++) {
      console.log(`${i+1}. ${sorted[i]['task']}`);
    }
  }

  static completedDescending(data) {
    let filter = data.filter(element => element['completed'] === true);
    let sorted = filter.sort((a, b) => a['created_date'] < b['created_date']);
    console.log(`Sorted completed task from newest to oldest:`);
    for (var i = 0; i < sorted.length; i++) {
      console.log(`${i+1}. ${sorted[i]['task']}`);
    }
  }

  static tagger(data, task_content, tag) {
    console.log(`You just tag "${data[Number(task_content) - 1]['task']}" with: ${tag}`);
  }


} //end class View

module.exports = View
