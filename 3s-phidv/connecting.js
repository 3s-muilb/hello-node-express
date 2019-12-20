
var bodyParser = require('body-parser');
var express = require('express');
var routes = require('./routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// app.get('/test', function(r, rs){
//     rs.send({})
// })
routes(app);
var server = app.listen(3000, function(){
    console.log("Listening on port %s...", server.address().port)
})

// bucket.insert('kiolyn-local', {'some': 'value'}, function(err, result) {
//     if (!err) {
//         console.log("stored document successfully. CAS is %j", result.cas);
//     } else {
//         console.error("Couldn't store document: %j", err);
//     }
// });

// bucket.get('kiolyn-local', function(err, result) {
//     if (err) {
//         if (err.code == couchbase.errors.keyNotFound) {
//             console.log('Key does not exist');
//         } else {
//             console.log('Some other error occurred: %j', err);
//         }
//     } else {
//         console.log('Retrieved document with value: %j', result.value);
//         console.log('CAS is %j', result.cas);
//     }
// });

// bucket.upsert('local', {'some': 'value'}, {'expiry': 1}, function(err){
//     bucket.get('local', function(err, result) {
//         console.log('Have item: %j', result.value);
//         console.log('Will attempt get later on..');
//         setTimeout(function(){
//             bucket.get('local', function(err, result){
//                 console.log('Got error: %s', err.message);
//             })
//         }, 3500);
//     })
// });

