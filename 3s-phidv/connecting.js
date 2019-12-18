var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091');
cluster.authenticate('mui.lb', '1234567a@');
var bucket = cluster.openBucket('kiolyn-local');
console.log(bucket);

bucket.insert('kiolyn-local', {'some': 'value'}, function(err, result) {
    if (!err) {
        console.log("stored document successfully. CAS is %j", result.cas);
    } else {
        console.error("Couldn't store document: %j", err);
    }
});

bucket.get('kiolyn-local', function(err, result) {
    if (err) {
        if (err.code == couchbase.errors.keyNotFound) {
            console.log('Key does not exist');
        } else {
            console.log('Some other error occurred: %j', err);
        }
    } else {
        console.log('Retrieved document with value: %j', result.value);
        console.log('CAS is %j', result.cas);
    }
});

bucket.upsert('local', {'some': 'value'}, {'expiry': 1}, function(err){
    bucket.get('local', function(err, result) {
        console.log('Have item: %j', result.value);
        console.log('Will attempt get later on..');
        setTimeout(function(){
            bucket.get('local', function(err, result){
                console.log('Got error: %s', err.message);
            })
        }, 3500);
    })
});

