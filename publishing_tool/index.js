var request = require('request');
var express = require("express");
const qs = require('qs');
var app = express();
app.get("/tweet", function (req, res) {
    res.send("Hi World");
    const url = 'https://api.twitter.com/1.1/statuses/update.json';
    var oauth = {
        consumer_key: "s44pagKGPoG53E3gGyZtpVRp5",
        consumer_secret: "jw8GB3iZV8ZHmIu484Ne0nXwuwwiqMPjpqDFZpBwr8rLOsGdYe",
        token: "882553776430874624-TrDzjb5ac3i7joU4uvulkUxjNu9MORX",
        token_secret: "FEPJAyOf4ghPwZ48oo6xA02acsLnDMKUmyH11ECtESmw8"
    };

    var statusUpdate = {
        url: url,
        oauth: oauth,
        qs: {
            status:req.query.status
        }
    };

    ;
    request.post(statusUpdate, function (err, postRes, body) {
        console.log("error", err);
        if (err || postRes.statusCode >= 400) {
            res.status(500).end();
        } else {
            console.log("http res code", postRes.statusCode)
            console.log("http res body", postRes.body)
            res.status(201).end();
        }
    })
});
app.get("/", function (req, res) {
    res.send("Hi World");
});
app.listen(3000, () => console.log("server started correctly"));