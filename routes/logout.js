var express = require('express');
var router = express.Router();

var test = require('./db-test');
var alert = require('alert-node');

/* GET home page. */
router.get('/', function(req, res, next) {
  test.logined = false;
  test.cert = false;
  alert('logout');
  res.redirect('/index');
});

module.exports = router;
