var express = require('express');
var routes = require('./routes');


var app = express();


app.get('/', routes.voteSMS);

app.get('/sendMessage', routes.sendSMS);


app.listen(3000, function(){
    console.log('connected!');
});


//server.route([
//    {
//        method: 'GET',
//        path: '/vote/sms',
//        handler: routes.voteSMS
//
//    },
//    {
//        method: 'GET',
//        path: '/send/sms',
//        handler: routes.sendSMS
//    }
//]);



//server.start();