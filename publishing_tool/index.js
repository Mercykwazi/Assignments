var request = require('request');
var express = require("express");
const qs = require('qs');
var app = express();
var url = "https://api.twitter.com/1.1/statuses/update.json";
const config = {
    consumerKey: "s44pagKGPoG53E3gGyZtpVRp5",
    consumerSecret: "jw8GB3iZV8ZHmIu484Ne0nXwuwwiqMPjpqDFZpBwr8rLOsGdYe",
}
app.get('/authorize/twitter', (req, res) => {
    console.log("Requesting a refresh token from twitter");
    getRequestToken((err, data) => {
        if (err) {
            res.statusCode(500);
        }
        res.send("<a href='https://api.twitter.com/oauth/authorize?oauth_token=" + data.oauth_token + "'>Authorize Twitter</a>");
    });
});
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
        status: "please work"
    }
};

;
request.post(statusUpdate, function (err, postRes, body) {
    console.log("http res code", postRes.statusCode)
    console.log("http res body", postRes.body)
    if (err) {
        console.log("error", err);

    }
});
function getAccessToken(oauthVerifier, requestToken, cb) {
    var oauth = {
        consumer_key: config.consumerKey,
        consumer_secret: config.consumerSecret,
        token: requestToken
    };
}
app.get("/", function (req, res) {
    res.send("Hi World");
});
app.listen(3000, () => console.log("server started"));
function accessToken(oauthVerifier, requestToken, cb) {
    var oauth = {
        consumer_key: config.consumerKey,
        consumer_secret: config.consumerSecret,
        token: requestToken
    };
    console.log("oauth = ", oauth);

    request.post({
        url: 'https://api.twitter.com/oauth/access_token',
        oauth: oauth,
        qs: { oauth_verifier: oauthVerifier }
    }, function (er, resp, body) {
        console.log("body = ", body);
        if (er) {
            console.log(er);
            cb(er);
            return;
        };

        var data = qs.parse(body);
        cb(null, data);
    });

}


function getRequestToken(cb) {
    var oauth = {
        callback: 'http://localhost:3000/twitter/callback'
        , consumer_key: config.consumerKey
        , consumer_secret: config.consumerSecret
    };
}
