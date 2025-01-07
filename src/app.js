const express = require('express');
const app = express();
const port = 4700;

app.use( "/home" ,(req, res) => {
    res.send("Helllo home come find me ");
});

app.use("/about" , (req, res) =>{
    res.send("hello about");
});

app.use( "project" ,(req, res) =>{
    res.send("hello project");
});


app.listen(port, () => {
    console.log("server is running successfully");
})
