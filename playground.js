const mongoose = require("mongoose");
const { db } = require("./db/config");
const connectionUrl = 'mongodb+srv://demo:admin@123@cluster1.qr3w1.mongodb.net/task-manager?retryWrites=true&w=majority';
const connectionOptions = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify :  false
};

mongoose.connect(connectionUrl, connectionOptions);


const database = mongoose.connection;
const tasks = database.collection('tasks');
tasks.find({}, function(err, data) {
    // data.toArray(function(err, res){
    //     console.log(res)
    // })
    console.log(data)
})
