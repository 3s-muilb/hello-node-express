//var couchbase = required('couchbase');

import * as couchbase from ('couchbase');

var cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091');

cluster.authenticate('mui.lb', '1234567a@');

var bucket = cluster.openBucket('kiolyn-local');

//console.log(bucket);


var key = "testid";

bucket.insert(key, {test:"Some Test Value"},function(err, res) {
    if (err) throw err;

    console.log('Initialized Document, stored to bucket', res);

    // // Get Document
    // bucket.get(key, function (err, resRead) {
    //     if (err) throw err;

    //     // Print Document Value
    //     console.log("Retrieved Document:", resRead.value);

	// 			// Add to value, and replace
	// 			resRead.value.test2='Some More Test Values';
	// 			var updatedVal=JSON.stringify(resRead.value);
	// 			bucket.replace(key,updatedVal,function(req,resUpdated){
	// 				if (err) throw err;

	// 				// Get Replaced Document Value
	// 				bucket.get(key, function (err, resReadUpdated) {
	// 						if (err) throw err;

	// 						// Print Document Value
	// 						console.log("Retrieved Document:", resReadUpdated.value);

	// 		        console.log('Example Successful - Exiting');
	// 		        process.exit(0);
	// 					});
	// 			});
    // });
});

