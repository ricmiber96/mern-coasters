const mongoose = require('mongoose');

// mongoose.connect('mongodb://mongo/mydatabase')
mongoose.connect('mongodb://mongo/example')
    .then(db => console.log('Db is connected',db.connection.host))
    .catch(err => console.error(err))