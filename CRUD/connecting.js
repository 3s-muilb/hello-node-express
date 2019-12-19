
// Require Couchbase Module
var couchbase = require('couchbase');

// Setup Cluster Connection Object
var cluster = new couchbase.Cluster('couchbase://localhost:8091');

// Authenticate with the cluster
cluster.authenticate('Administrator', 'Nhan1811!');

// Setup Bucket object to be reused within the code
var bucket = cluster.openBucket('test');

console.log('bucket');

var key = '2';
// bucket.insert(key, { test: 'Some Test Value' }, function (err, res) {
//     if (err) throw err;

//     console.log('Add');

//     // Get Document
//     bucket.get(key, function (err, resRead) {
//         if (err) throw err;

//         // Print Document Value
//         console.log('Result:', resRead.value)
//     });
// });

// bucket.remove(key, function (err, res) {
//     if (err) {
//         console.log('could not delete ', err);
//     }
//     else {
//         console.log('isdelete:', res.value);
//     }
// });

bucket.replace(key, {some: 'value'}, function(err, res) {
    if (err) {
      console.log('operation failed', err);
      /*
      operation failed { [Error: The key does not exist on the server] code: 13 }
      */
      return;
    }
  
    console.log('success!', res);
  });