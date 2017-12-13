var request = require('request');
var express = require("express");
var app = express();
const url = 'https://api.twitter.com/1.1/statuses/update.json';
var oauth = {
    consumer_key: "s44pagKGPoG53E3gGyZtpVRp5",
    consumer_secret: "jw8GB3iZV8ZHmIu484Ne0nXwuwwiqMPjpqDFZpBwr8rLOsGdYe",
    token: "882553776430874624-TrDzjb5ac3i7joU4uvulkUxjNu9MORX",
    token_secret: "FEPJAyOf4ghPwZ48oo6xA02acsLnDMKUmyH11ECtESmw8"
};
var callback = {
    https:"//api.twitter.com/oauth/access_token",
    callback: "http://localhost:3000/twitter/callback",
}
access_point = {
    url: url,
    oauth: oauth,
    qs: {
        status: "I'm just testing my app"
    }
};

;
request.post(access_point, function (err, res, body) {
    console.log("http res code", res.statusCode)
    console.log("http res body", res.body)
    if (err) {
        console.log(err);

    }
    app.get("/", function (req, res) {
        res.send("Hi World");
    });

    app.listen(3000, () => console.log("working"));




})