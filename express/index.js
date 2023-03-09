const express = require("express");
const path = require("path");
const app = express();

const pathdir = path.join(__dirname, "public");
// console.log(pathdir);
app.use(express.static(pathdir));


app.get('/', (req, res) => {
    // res.send("Hi this is home page");
    res.sendFile(`${pathdir}/home.html`);
});

app.get('/download', (req, res) => {
    res.download(`${pathdir}/home.html`)
})

app.get('/about', (req, res) => {
    // res.send("Hi this is about page");
    res.sendFile(`${pathdir}/about.html`);
    // res.send(`<h1>hi bhai</h1>`);
    // res.send({
    //     name: "Abhishek",
    //     age: 22,
    //     address: "Indore"
    // });
});

app.listen(3000, (err) => {
    if (err) {
        console.log("Server is not connected");
    } else {
        console.log("server is connected at Port 3000")
    }
});
