const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect(
        "mongodb+srv://akmadd:akmadd@namastenode.hmenp.mongodb.net/?retryWrites=true&w=majority&appName=NamasteNode");
}



module.exports = connectDb;