var express = require('express');

var errMiddleware = require('./err-middleware');


var app = express();

var trackingCache = {};

app.get('/tracking', function (req, res, next){

  if(!req.query || ! req.query.username || ! req.querycurrentDate){
    next('Incorrect query params provide:' + JSON.stringify(req.query));

  }
  var user = req.query.username;
  var date = req.query.currentDate;

  if(!trackingCache[user]) {
    trackingCache[user][date] =0;

  }
  trackingCache[user][date] += 1;
  if(trackingCache[user][date]> 5) {
    res.status(200).end();

  }
});
app.use(errMiddleware);
app.listen(3002);

module.exports = app;
