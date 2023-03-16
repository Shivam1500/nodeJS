const express = require('express');
const app = express();
const userData = require("./connection");


app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const sendData = new userData(req.body);
        const saveData = await sendData.save();

        res.send(saveData);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.get('/user', async (req, res) => {
    try {
        const getData = await userData.find({});
        res.send(getData);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const getId = await userData.findById({ _id: id })
        res.send(getId);
    } catch (error) {
        res.status(404).send(error);
    }
});

app.post('/login', async (req, res) => {
    try {
        const useremail = req.body.email;
        const getemail = await userData.findOne({ email: useremail })
        res.send(getemail);
    } catch (error) {
        res.status(500).send(error);
    };
});

app.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await userData.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.send(updateData)
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteData = await userData.findByIdAndDelete({ _id: id });
        res.send(deleteData);
    } catch (error) {
        res.status(500).send(error);
    }
})





app.listen(3000, () => {
    console.log("server running at port 3000");
});