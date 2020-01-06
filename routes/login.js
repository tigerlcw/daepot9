var express = require('express');
var router = express.Router();

var test = require('./db-test');

var nodemailer = require('nodemailer');
var alert = require('alert-node');

var failed = false;


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function(req, res, next) {
    if (req.body.email == test.email) {
        if (req.body.pw == test.pw) {
            if (test.cert) {
                // res.cookie('user', req.body.email, {
                //     expires: new Date(Date.now() + 900000),
                //     httpOnly: true
                // });

                // req.session.email = req.body.email;
                test.logined = true;

                res.redirect('/index');
            } else {
                test.logined = true;
                alert('Invalid Account');
                res.redirect('/index');
            }
        } else {
            failed = true;
        }
    } else {
        failed = true;
    }

    if (failed) {
        alert('Failed: Check your id or pw');
    }
});

//node mailer test
let transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: "",
        pass: ""
    }
});

var mailOpt = {
    from: '', // sender address
    to: "", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "", // plain text body
  };

router.get('/test', function(req, res, next) {
    transporter.sendMail(mailOpt, function(err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log('email has been sent');
        }

        transporter.close();
    });
    res.send('check your email');
});

module.exports = router;