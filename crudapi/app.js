var bodyParser = require('body-parser');
var express = require('express');
var routes = require('./routes');
var couchbase = require('couchbase');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091');
cluster.authenticate('mui.lb', '1234567a@');
const bucket = cluster.openBucket('kiolyn');
module.exports = bucket;

// routes(app);
var server = app.listen(6969, function(){
    console.log("Listening on port %s...", server.address().port)
})