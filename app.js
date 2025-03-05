const express=require("express")
const app=express()
const port=5000
app.get('/apple',(req,res)=>{
    res.send("Apple is red in color")
})

///roust concept
const firstmiddleware=((req,res,next)=>{
    if(10<20){
        next()
    }
    else{
        console.log("sorry you are not allowed")
    }
})
const secondmiddleware=((req,res,next)=>{
    if(10>9){
        next()
    }
    else{
        console.log("sorry you are not allowed")
    }
})
const thirdmiddleware=((req,res,next)=>{
    if(10>20){
        next()
    }
    else{
        console.log("sorry you are not allowed")
    }
})


app.get('/home',firstmiddleware,(req, res) => {
    res.send("hello, I am the home page");
});

app.get('/about',secondmiddleware,(req, res) => {
    res.send("hello, I am the about page");
});

app.get('/user/:id',thirdmiddleware,(req, res) => { // Note the correction here
    res.send(`you searched for ${req.params.id}`);
});
app.listen(port,()=>{
    console.log("server started and running sucesfully")
})
