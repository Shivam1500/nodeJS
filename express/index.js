const express = require("express");
const path = require("path");
const app = express();
const router = require('./router');

// const pathdir = path.join(__dirname, "public");
// console.log(pathdir);
// app.use(express.static(pathdir));

app.set("view engine", "ejs");

// console.log(app.get("view engine"));
// console.log(path.join(_dirname), "views");

app.use(router);

app.listen(3000, (err) => {
    if (err) {
        console.log("Server is not connected");
    } else {
        console.log("server is connected at Port 3000");
    }
});
