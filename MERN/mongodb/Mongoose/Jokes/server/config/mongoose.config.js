const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>console.log('connected to database'))
    .catch(err=>console.log('did not connect to db', err))