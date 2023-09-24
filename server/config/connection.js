const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect('mongodb+srv://mernproject:mernproject@cluster0.7mfw6to.mongodb.net/' || 'mongodb://127.0.0.1:27017/FitnRun');

module.exports = mongoose.connection;


