const Controller = require("./Controller.js");

const fs = require("fs");

let arg1 = String(process.argv[2]);
let arg2 = String(process.argv[3]);
// console.log(arg1);
// console.log(arg2);
//arg1 = "list";

switch (arg1.toLowerCase()) {
    case "help":
        Controller.help();
        break;
    case "list":
        Controller.list();
        break;
    case "add":

        break;
    case "findbyid":

        break;

    default:
        break;
}

// let dataJSON = fs.readFileSync("data.json");
// let data = JSON.parse(dataJSON);

// data.push({ name: "Anas", age: 20 });

// console.log(data);

// let result = JSON.stringify(data);

// fs.writeFileSync("dataout.json", result, { encoding: "utf8", mode: 0o666, flag: "w" });