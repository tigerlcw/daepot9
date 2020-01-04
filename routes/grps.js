var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = mongoose.connection;
var GroupSchema = require('../schemas/grp');
var Group = mongoose.model('Group', GroupSchema);

db.on('error', console.error);
db.once('open', function() {
    console.log('Connected to mongod server');
})

mongoose.connect('mongodb://localhost:27017/dp9');

router.get('/', function(req, res, next) {
    Group.find({}, function(err, result) {
        res.write(JSON.stringify(result));
        res.end();
    });
});

router.post('/save', function(req, res, next) {
    
    Group.create({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title, // String
        desc: req.body.desc,   // String
        owner: req.body.name,  // String
        max: req.body.max,     // Number
        cur: req.body.cur,     // Number
        loc: {
            lat: req.body.lat, // String
            lon: req.body.lon  // String
        },
        until: req.body.until, // Date
        date: new Date(),      // Date
        tag: req.body.tag,     // String
        prog: req.body.prog    // Boolean
    });

    res.send('success');
});

module.exports = router;