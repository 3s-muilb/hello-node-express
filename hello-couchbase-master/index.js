"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const couchbase = require("couchbase");
var cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091');
cluster.authenticate('mui.lb', '1234567a@');
var bucket = cluster.openBucket('kiolyn');
var key = "yyyy";
bucket.insert(key, { id: +key,
    type: "huynh van luong",
    createBy: "huynh van luong",
    description: "huynh van luong",
    isDelete: "huynh van luong"
}, function (err, res) {
    console.log('Initialized Document, stored to bucket');
    bucket.get(key, function (err, resRead) {
        if (err)
            throw err;
        console.log("Retrieved Document:", resRead.value);
        console.log('Example Successful - Exiting');
        process.exit(0);
    });
});
//# sourceMappingURL=index.js.map