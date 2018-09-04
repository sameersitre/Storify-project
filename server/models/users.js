const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email: {
        type: String,
        // unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: String,
});
module.exports= mongoose.model('Users', userSchema);