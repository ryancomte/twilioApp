'use strict';


var twilio = require('twilio');

var accountSid = 'AC180ebc8547a7a4da93fbcd0c838ac517';
var authToken = 'ea34a5b50e0a3c55ee56e16d0b89acde';

var client = require('twilio')(accountSid, authToken);



exports.voteSMS = function(req, res) {
    var resp = new twilio.TwimlResponse();
    resp.message('Thanks for responding!');
    res.send(resp.toString()).type('text/xml');
};

exports.sendSMS = function(req, res){
        client.sendMessage({
            body: 'Please Vote',
            to: '+18018749950',
            from: '+18019964718'
        }, function(err,message){
            res.send(message);
        });
}