const fs = require('fs');
let dataJsonIn = fs.readFileSync('data.json');
let parsed = JSON.parse(dataJsonIn);

class Task {
    static help() {
        console.log('Pilih salah satu command di bawah ini: ');
        console.log(' ');
        console.log('---------------------------------------------------------------------------');
        console.log('node todo.js help - menampilkan help section');
        console.log('node todo.js list - menampilkan daftar todo list kamu');
        console.log('node todo.js add <task content> - menambah kegiatan ke dalam list todo kamu');
        console.log('node todo.js findById <task id> - melihat kegiatan berdasarkan nomor urutan');
        console.log('node todo.js delete <task id> - menghapus kegiatan di todo kamu');
        console.log('node todo.js complete <task id> - menandai kegiatan sebagai selesai');
        console.log('node todo.js incomplete <task id> - menandai kegiatan sebagai belum selesai');
    }

    static list() {
        for (let i = 0; i < parsed.length; i++) {
            console.log(`${i + 1}: ${parsed[i].task}`);
        }
    }

    static add(input) {
        let stringed = input.toString()
        let tempAdd = {
            task: stringed
        }

        parsed.push(tempAdd);
        let stringified = JSON.stringify(parsed);
        fs.writeFileSync('data.json', stringified, 'utf8');
    }

    static findById(input) {
        let numbered = Number(input);
        console.log(`${1}: ${parsed[input - 1].task}`);
    }

    static delete(input) {
        let numbered = Number(input);
        console.log(`deleting '${parsed[numbered-1].task}' from todo list!`);
        parsed.splice(numbered - 1, 1);

        let stringified = JSON.stringify(parsed);
        fs.writeFileSync('data.json', stringified, 'utf8');
    }
}

// running classes through if's

if (process.argv[2] === ('help' || undefined)) {
    Task.help();
}

else if (process.argv[2] === 'list') {
    Task.list();
}

else if (process.argv[2] === 'add') {
    Task.add(process.argv[3]);
}

else if (process.argv[2] === 'findById') {
    Task.findById(process.argv[3]);
}

else if (process.argv[2] === 'delete') {
    Task.delete(process.argv[3]);
}

else {
    console.log('wrong!');
}