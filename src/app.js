const express = require('express');
const app = express();
const port = 4700;

//for params
app.get( "/home" ,(req, res) => {
    console.log(req.query);
    res.send("query request is successful");
}); 

app.post("/home", (req, res) => {
    console.log("Post request is successful");
    res.send("Post request is successful");
});

app.delete("/home", (req, res) => {
    console.log("Delete request is successful");
    res.send("Delete request is successful");
});

app.listen(port, () => {
    console.log("server is running successfully");
})
