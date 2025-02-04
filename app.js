const express = require("express");
const app = express();
const port = 5000;

app.get('/home', (req, res) => {
    res.send("hello, I am the home page");
});

app.get('/about', (req, res) => {
    res.send("hello, I am the about page");
});

app.get('/user/:id', (req, res) => { // Note the correction here
    res.send(`you searched for ${req.params.id}`);
});

app.listen(port, () => {
    console.log("Server started and running successfully");
});
