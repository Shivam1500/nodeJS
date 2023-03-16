const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/nodejstutorial").then(() => {
    console.log("connection sucessfully done");
}).catch((e) => {
    console.log(e);
});


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
});

// console.log(schema);

const userData = mongoose.model("user", schema);

module.exports = userData;