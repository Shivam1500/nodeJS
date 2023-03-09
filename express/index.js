const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("Hi this is home page");
});

app.get('/about', (req, res) => {
    res.send("Hi this is about page");
});




app.listen(3000, (err) => {
    if (err) {
        console.log("Server is not connected");
    } else {
        console.log("server is connected at Port 3000")
    }
});
