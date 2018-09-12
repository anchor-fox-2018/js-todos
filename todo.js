const Controller = require('./controller.js');

let option = process.argv[2];
let task_content = process.argv[3];


Controller.todoMenu(option, task_content);
