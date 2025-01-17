const express = require('express');
const app = express();
const port = 4800;
const connectDb = require('./config/database');
const userModel = require('./models/user');

app.post('/signup', async (req, res) => {
        try {
            const userObj = {
                firstName: "Abhishek",
                lastName: "Maddhesiya",
                email: "akmadd456@gmail.com",
                password: "akmadd@1234"
            };
            const user = new userModel(userObj); // creating a new instance of the user model
            await user.save(); // saving the user to the database
            res.send("User signed up successfully");

        } catch (error) {
            console.log("Error signing up user", error);
            res.send("Error signing up user");
        }
    });

connectDb()
.then(() => {
    console.log("Connected to the database");
    app.listen(port, () => {
        console.log("server is running successfully");
    })
})
.catch((err) => {
    console.log("Error connecting to the database", err);
    
});


