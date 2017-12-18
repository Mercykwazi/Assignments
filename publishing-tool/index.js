var request = require('request');
var express = require("express");
const qs = require('querystring');
var app = express();
var url = "https://api.twitter.com/1.1/statuses/update.json";

app.get("/", function (req, res) {
app.listen
    res.send("Hi World welcome to my publishing tool");
});

const config = {
    consumerKey: "s44pagKGPoG53E3gGyZtpVRp5",
    consumerSecret: "jw8GB3iZV8ZHmIu484Ne0nXwuwwiqMPjpqDFZpBwr8rLOsGdYe",
}
app.get('/authorize/twitter', (req, res) => {
    getRequestToken((err, data) => {
        if (err) {
            res.statusCode(500);
        }
        res.send("<a href='https://api.twitter.com/oauth/authorize?oauth_token=" + data.oauth_token + "'>Authorize Twitter</a>");
    });
});

app.get('/twitter/callback', (req, res) => {
  var tokenDetails = qs.parse(req.query);

  

  getAccessToken(tokenDetails.oauth_verifier, tokenDetails.oauth_token, (err, data) =>{
    if (err) {
      console.log('error getting access token');
      res.send('<h1>Something went wrong while giving access, please try again.</h1>');
    }else {

      users.push(data); 

      console.log('the access token is: ', data);
      res.send('<h1>congrats, you have authorized us</h1>');
    }
  });
});

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(3000, () => console.log('The server started correctly and is listening on port 3000!'))

function tweet(message){
  const url = "https://api.twitter.com/1.1/statuses/update.json";

  var oauth = {
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: token,
    tokenSecret: tokenSecret
  };

  var options = {
    url: url,
    oauth:oauth,
    qs: {status: "Hello World"}
  };

  request.post(options,
               function(err,httpResponse,body){
                 console.log("http response code", httpResponse.statusCode);
                 console.log("http response body", httpResponse.body);

                 if (err){
                   console.log(err);
                 }
               });
}

function getAccessToken(oauthVerifier, requestToken, cb){
  var oauth = {
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: requestToken
  };
  console.log("oauth = ", oauth);

  request.post({
    url:'https://api.twitter.com/oauth/access_token',
    oauth: oauth,
    qs: {oauth_verifier: oauthVerifier}
  }, function (e, r, body) {
    console.log("body = ", body);
    if (e){
      console.log(e);
      cb(e);
      return;
    };


    var data = qs.parse(body);
    cb(null, data);
  });

}


function getRequestToken(cb){
  var oauth = {
    callback: 'http://localhost:3000/twitter/callback'
    , consumer_key: config.consumerKey
    , consumer_secret: config.consumerSecret
  };

  request.post({
    url:'https://api.twitter.com/oauth/request_token',
    oauth:oauth
  }, function (e, r, body) {
    if (e){
      console.log(e);
      cb(e);
      return;
    };

    var data = qs.parse(body);
    cb(null, data);
  });

}
