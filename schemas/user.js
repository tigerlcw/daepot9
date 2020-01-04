var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: String,
    pw: String,
    name: String,
    cert: Boolean,
    grade: Number,
    date: Date
});

module.exports = userSchema;