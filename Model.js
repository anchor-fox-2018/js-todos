const fs = require("fs");
class Model {
    static help() {
        let data = fs.readFileSync("help.json");
        return data;
    }

    static list() {

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
module.exports = Model;