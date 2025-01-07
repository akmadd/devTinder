const express = require('express');
const app = express();
const port = 4700;

app.use('/home', 
    

(req, res, next) => {
    console.log("handling route 1");
    next();
});

app.use('/home', (req, res, next) => {
    console.log("handling route 2");
    next();
});

app.use('/home', (req, res, next) => {
    console.log("handling route 3");
    next();
});
app.use('/home', (req, res, next) => {
    console.log("handling route 4");
    next();
});
app.use('/home', (req, res, next) => {
    console.log("handling route 5");
    res.send("Hello from route 5");
});


app.listen(port, () => {
    console.log("server is running successfully");
})
