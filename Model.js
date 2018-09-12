const fs = require("fs");
class Model {
    static help() {
        let data = fs.readFileSync("help.json");
        return data;
    }

    static list() {
        let data = fs.readFileSync("data.json");
        return data;
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