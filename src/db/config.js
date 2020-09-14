const mongoose = require('mongoose')

  mongoose.connect('mongodb+srv://demo:admin@123@cluster1.qr3w1.mongodb.net/blogy?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

module.exports = mongoose.connection;