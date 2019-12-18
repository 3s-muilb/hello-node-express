import * as couchbase from 'couchbase';

var cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091')

cluster.authenticate('mui.lb', '1234567a@');

var bucket = cluster.openBucket('kiolyn-local');

var key = 'phong';
bucket.insert(key,{test :"testttttt"}, function(err,res){
    if (err){
        throw err;
    }
    console.log("success");
})