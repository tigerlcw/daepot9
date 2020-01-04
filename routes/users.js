var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var db = mongoose.connection;
var UserSchema = require('../schemas/user');
var User = mongoose.model('User', UserSchema);

db.on('error', console.error);
db.once('open', function() {
    console.log('Connected to mongod server');
})

mongoose.connect('mongodb://localhost:27017/dp9');

router.get('/', function(req, res, next) {
    User.find({}, function(err, result) {
        res.write(JSON.stringify(result));
        res.end();
    });
});

router.post('/save', function(req, res, next) {
    
    User.create({
        _id: new mongoose.Types.ObjectId,
        email: req.body.email,// String
        pw: req.body.pw,      // String
        name: req.body.name,  // String
        cert: req.body.cert,  // Boolean
        grade: req.body.grade,// Number
        date: new Date()      // Date
    });

    res.send('success');
});

module.exports = router;