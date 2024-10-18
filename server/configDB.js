const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shaheed:123@theworddb.i0xth.mongodb.net/coursesDatas?retryWrites=true&w=majority&appName=TheWordDb').then(() => {
     console.log("CONNECTED TO DB")
});
const schema = mongoose.Schema({
     name:String,
     discri:String,
     tags:Array,
     url:String
})
module.exports = {mongoose}