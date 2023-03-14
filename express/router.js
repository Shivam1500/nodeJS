const express = require('express');
const router = express.Router();
const middleware = require('./middleware');

router.use(middleware);

router.get("/", (req, res) => {
    // res.send("Hi this is home page");
    // res.sendFile(`${pathdir}/home.html`);
    res.render("home", {
        title: "Home"
    });
});

router.get("/download", (req, res) => {
    // res.download(`${pathdir}/home.html`)
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About"
    })
    // res.send("Hi this is about page");
    // res.sendFile(`${pathdir}/about.html`);
    // res.send(`<h1>hi bhai</h1>`);
    // res.send({
    //     name: "Abhishek",
    //     age: 22,
    //     address: "Indore"
    // });
});

module.exports = router;