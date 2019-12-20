//var cluster = new couchbase.Cluster('couchbase://localhost');
var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091');
cluster.authenticate('mui.lb', '1234567a@');
const bucket = cluster.openBucket('kiolyn');
module.exports = bucket;