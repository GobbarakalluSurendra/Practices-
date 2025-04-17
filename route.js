const express = require("express");
const app = express();
const port = 3000;
const middleware=((req,res,next)=>{
    if(10>20){
        next()
    }
})

app.get('/home',middleware, (req, res) => {
    res.send("hello, I am the home page");
});

app.get('/about', (req, res) => {
    res.send("hello, I am the about page");
});

app.get('/user/:id', (req, res) => { // Note the correction here
    res.send(`you searched for ${req.params.id}`);
});

app.listen(port, () => {
    console.log("Server IS started and running successfully");
});
