const mongoose = require("mongoose");

uri= "mongodb+srv://naziurcse20220104117:DDTYztD5ScHmf5V5@voltaapi.zziwyqt.mongodb.net/VoltaAPI?retryWrites=true&w=majority&appName=VoltaAPI";

const connectDB = () => {
    console.log("connect db");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;