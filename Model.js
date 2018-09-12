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
        let dataRead = fs.writeFileSync("data.json", task, { encoding: "utf8", mode: 0o666, flag: "w" });
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