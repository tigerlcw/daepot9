var express = require('express');
var router = express.Router();

var test = require('./db-test.js');
var alert = require('alert-node');

/* GET users listing. 
auth부분에 자신의 이메일 정보 적기 id pw
*/

router.get('/', function(req, res, next) {
    res.render('certification');
})

router.post('/', function(req, res, next) {
    if (req.body.code == test.code) {
        test.cert = true;
        alert('Certificated');
        res.redirect('/index');
    }
    else {
        alert('You are an ass hole');
    }
});

module.exports = router;