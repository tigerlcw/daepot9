var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var grpSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    desc: String,
    owner: String,
    max: Number,
    cur: Number,
    loc:
    {
        lat: String,
        lon: String
    },
    until: Date,
    date: Date,
    tag: String,
    prog: Boolean
});

module.exports = grpSchema;