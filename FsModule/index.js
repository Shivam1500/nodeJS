const fs = require('fs');

// const file =
// fs.writeFile('file.txt', 'what is your name', () => {
//     console.log('Data is added sucessfully');
// });
// console.log(file);

// const Write = fs.writeFileSync('file1.txt', 'How are you',);
// console.log(Write);
// console.log("Hello Abhishek Pathak");

// const Read = fs.readFile('file.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });
// console.log(Read);

// const Update = fs.appendFile('file.txt', ' my name is abhishek pathak', (err) => {
//     console.log(err);
// });

// console.log(Update);

// const reName = fs.rename('file1.txt', 'rename.txt', (err) => {
//     console.log(err);
// });
// console.log(reName);

const deleteFile = fs.unlink('rename.txt', (err) => {
    console.log(err);
});

console.log(deleteFile);
