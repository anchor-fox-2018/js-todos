const Controller = require('./controller.js')

let option = process.argv[2];

switch (option) {
  case 'help': Controller.todoMenu(option); break;
  default: break;
}
