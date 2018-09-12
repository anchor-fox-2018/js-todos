//Membaca Isi
const fs = require('fs');
let dataJson = fs.readFileSync('data.json')
let data =JSON.parse(dataJson)
//ARGV Input
const masukan = process.argv[2];
const isi = process.argv[3];
function buatId(data){
    for(let i = 0;i < data.length;i++){
        data[i][0] = i+1
    }
}

if(masukan === 'help'){
    console.log('$ node.js\n$ node.js help\n$ node.js add <task_content>\n$ node.js findById <task_id>\n$ node.js delete <task_id>\n$ node.js complete <task_id>\n$ node.js uncomplete <task_id>')
}else if(masukan === 'list'){
    console.log(data)
}else if(masukan === 'add'){
    let hasil = []
    let isiId = data.length+1
    hasil.push(isiId);
    hasil.push('[ ]')
    hasil.push(isi);
    data.push(hasil);
    let addTodo = JSON.stringify(data);
    fs.writeFileSync('data.json', addTodo,'utf8');
    console.log('Added '+ isi +' to your TODO list...')
}else if(masukan === 'findById'){
    for(let i = 0;i < data.length;i++){
        if(data[i][0] === Number(isi)){
            console.log(data[i])
        }
    }
}else if(masukan === 'delete'){
    for(let i = 0;i < data.length;i++){
        if(data[i][0] === Number(isi)){
            console.log('Deleted '+data[i][2]+' From Your TODO list...');
            data.splice(i,1);            
        }        
    }
    buatId(data);
    let delTodo = JSON.stringify(data);
    fs.writeFileSync('data.json', delTodo,'utf8');
}else if(masukan === 'complete'){
    for(let i = 0;i < data.length;i++){
        if(data[i][0] === Number(isi)){
            data[i][1] = '[X]'
        }
    }
    buatId(data);
    let delTodo = JSON.stringify(data);
    fs.writeFileSync('data.json', delTodo,'utf8');
    console.log(data)

}else if(masukan === 'uncomplete'){
    for(let i = 0;i < data.length;i++){
        if(data[i][0] === Number(isi)){
            data[i][1] = '[ ]'
        }
    }
}   
    buatId(data);
    let delTodo = JSON.stringify(data);
    fs.writeFileSync('data.json', delTodo,'utf8');
    console.log(data)
// let finalData = JSON.stringify(data);
//console.log(inputData(data))
