var express = require('express');
var app = express();
var server = require('http').Server(app);
var exec = require('child_process').exec;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

server.listen(80);

app.get('/', function (req,res){
    res.sendFile(__dirname+'/index.html');
});
app.post('/', function (req,res){
    if(req.body.sms=="1"){req.sms=' sms'}else{req.sms=''}
    exec('imailer "'+req.body.to+'" "'+req.body.msg+'"'+req.sms);
});