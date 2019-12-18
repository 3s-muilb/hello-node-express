import "reflect-metadata";
import {createConnection, InsertQueryBuilder} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import {AppRoutes} from "./routes";
import * as couchbase from 'couchbase';

const cluster = new couchbase.Cluster('couchbase://172.16.15.23:8091');
cluster.authenticate('mui.lb', '1234567a@');
const bucket = cluster.openBucket('kiolyn-local');

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


// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
// createConnection().then(async connection => {

//     // create express app
//     const app = express();
//     app.use(bodyParser.json());

//     // register all application routes
//     AppRoutes.forEach(route => {
//         app[route.method](route.path, (request: Request, response: Response, next: Function) => {
//             route.action(request, response)
//                 .then(() => next)
//                 .catch(err => next(err));
//         });
//     });

//     // run app
//     app.listen(3000);

//     console.log("Express application is up and running on port 3000");

// }).catch(error => console.log("TypeORM connection error: ", error));
