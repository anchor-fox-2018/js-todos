const Model = require("./Model.js");
const View = require("./View.js");

class Controller {
    static help() {
        let data = Model.help().toString();
        let dataJson = JSON.parse(data);
        let result = dataJson.map(a => a.command);
        result.forEach(function (element) {
            View.print(element);
        });
    }

    static list() {
        let data = Model.list().toString();
        let dataJson = JSON.parse(data);
        let result = dataJson.map(a => a.todo);
        View.print(`To do list:`)
        result.forEach(function name(element, index) {
            View.print(`${index + 1}. ${element}`);
        });
    }
    static add(task) {

    }
    static findById(taskId) {

    }
    static delete(taskId) {

    }
    static complete(taskId) {

    }
    static uncomplete(taskId) {

    }
}

module.exports = Controller;