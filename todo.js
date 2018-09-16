const fs = require('fs');
let dataJsonIn = fs.readFileSync('data.json')

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
}

// running classes through if's

if (process.argv[2] === ('help' || undefined)) {
    Task.help();
}

else {
    console.log('wrong!');
}