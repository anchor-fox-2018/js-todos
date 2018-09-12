const fs = require('fs');
const Controller = require('./controller')

let dataJson = fs.readFileSync('data.json')
let data = JSON.parse(dataJson);

// data.push()

// console.log(data);

// fs.writeFileSync(data2.json, finalData);
if(process.argv[2] == undefined){
    Controller.help();
} else {
    let command = process.argv[2]
}

let finalData = JSON.stringify(data, null, 2)


