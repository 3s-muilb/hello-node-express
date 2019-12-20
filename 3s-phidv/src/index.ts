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
console.log(bucket);
// bucket.insert('phi.dv', {'phi': 'dv'}, function(err, result) {
//     if (!err) {
//         console.log("stored document successfully. CAS is %j", result.cas);
//     } else {
//         console.error("Couldn't store document: %j", err);
//     }
// });

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
