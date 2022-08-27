const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://mayank8887:8077520633@cluster0.k4kjtle.mongodb.net/fileuploads?retryWrites=true&w=majority");
};