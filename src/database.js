const mongoose = require('mongoose')

    mongoose
    .connect("mongodb://franco1:password@localhost:27017/employees?authSource=admin",{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log('Db is connected'))
    .catch((err) => console.error(err));