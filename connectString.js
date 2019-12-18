"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const couchbase = require("couchbase");
var cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091');
cluster.authenticate('mui.lb', '1234567a@');
var bucket = cluster.openBucket('kiolyn-local');
var key = 'phong';
// create 
bucket.insert(key, { test: "testttttt" }, function (err, res) {
    if (err) {
        throw err;
    }
    console.log("success");
});
//# sourceMappingURL=connectString.js.map