var express = require('express');
var bodyParser = require('body-parser');
var couchbase = require('couchbase');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cluster = new couchbase.Cluster('couchbase://localhost:8091');

cluster.authenticate('Administrator', 'Nhan1811!');

var bucket = cluster.openBucket('test');
module.exports.bucket = bucket;
console.log("sssssssssssssssssssssss1");
var routes = require('./routes')(app);


var server = app.listen(3000, function () {
    console.log('Listening on....', server.address().port);
});