var express = require('express');
var bodyParser = require("body-parser");
var couchbase = require("couchbase");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var cluster = new couchbase.Cluster("couchbase://172.16.15.23:8091/");
cluster.authenticate('mui.lb', '1234567a@');
var bucket = cluster.openBucket('kiolyn');
module.exports.bucket = bucket;

var routes = require("./routes.js")(app);
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});