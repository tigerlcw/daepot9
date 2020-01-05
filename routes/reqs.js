var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = mongoose.connection;
var RequestSchema = require('../schemas/req');
var Request = mongoose.model('Request', RequestSchema);

db.on('error', console.error);
db.once('open', function() {
    console.log('Connected to mongod server');
})

mongoose.connect('mongodb://localhost:27017/dp9');

router.get('/', function(req, res, next) {
    Request.find({}, function(err, result) {
        res.render('result', { jj: JSON.stringify(result) });
    });
});

router.post('/save', function(req, res, next) {

    Request.create({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        desc: req.body.desc,
        owner: req.body.owner,
        max: req.body.max,
        cur: req.body.cur,
        loc: {
            lat: req.body.lat,
            lon: req.body.lon
        },
        reward: req.body.reward,
        until: req.body.until,
        date: new Date(),
        tag: req.body.tag,
        prog: false
    });

    res.send('success');
});

// test only
router.get('/save', function(req, res, next) {
    
    var d = new Date();
    d.setDate(20 + Math.floor(Math.random() * 10) + 1);

    Request.create({
        _id: new mongoose.Types.ObjectId,
        title: 'title' + Math.floor(Math.random() * 10) + 1, // String
        desc: 'desc' + Math.floor(Math.random() * 10) + 1,   // String
        owner: 'name' + Math.floor(Math.random() * 10) + 1,  // String
        max:  + Math.floor(Math.random() * 10) + 5,     // Number
        cur:  + Math.floor(Math.random() * 3) + 1,     // Number
        loc: {
            lat: Math.random() * 100 + '',  // String
            lon: Math.random() * 100 + ''   // String
        },
        reward: 'reward' + Math.floor(Math.random() * 10) + 1,// String
        until: d, // Date
        date: new Date(),      // Date
        tag: 'tag' + Math.floor(Math.random() * 10) + 1,     // String
        prog: true    // Boolean
    });

    res.send('success');
});

module.exports = router;