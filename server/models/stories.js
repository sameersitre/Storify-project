const mongoose = require('mongoose');
var storySchema = new mongoose.Schema({
    title: String,
    character1: String,
    character2: String,
    location: String,
    description: String,
    edit: Boolean,
    user: String,
});
module.exports= mongoose.model("Stories", storySchema);