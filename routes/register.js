var express = require('express');
var router = express.Router();

var test = require('./db-test.js');
var nodemailer = require('nodemailer');
var alert = require('alert-node');

var failed = false;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', function(req, res, next) {
    console.log(req.body.pw);
    test.email = req.body.email;
    test.pw = req.body.pw;
    test.code = Math.floor(Math.random() * 1000) + 1000; // rand int 1 ~ 10

    if (req.body.truely == '1') {
        console.log('on going');
        console.log('code is ' + test.code);

        // email sending
        var mOpt = {
            from: 'horangi18@gmail.com', // sender address
            to: test.email, // list of receivers
            subject: "똑. 똑. 확인 메일 왔어요!", // Subject line
            html: ' \
            <p>Email Certification</p> \
            </br> \
            <p>이 확인 코드를 입력하세요.</p> \
            <p> ' + test.code + ' </p>'
        };

        transporter.sendMail(mOpt, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log('email has been sent to: ' + test.email);
            }

            transporter.close();
        });

        test.cert = false;

        alert('Check your email');
        res.redirect('/index');
    }
});

//node mailer test
let transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: "horangi18@gmail.com",
        pass: "horangi99"
    }
});

module.exports = router;