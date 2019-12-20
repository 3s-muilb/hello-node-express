var uuid = require("uuid");
var N1qlQuery = require("couchbase").N1qlQuery;
console.log('-----------------On models-------------------')
var bucket = require("./app").bucket;

function PersonModel() { }

PersonModel.getAll = function (callback) {
    // var statement = 'SELECT' +
    //                 'id, name, class' +
    //                 'FROM' + bucket._name + 
    //                 'WHERE type="person"';
    var query = N1qlQuery.fromString('SELECT id, createBy, description, type FROM kiolyn where isDelete = false');
    // var query = N1qlQuery.fromString(statement);
    // var query = N1qlQuery.fromString('SELECT name, class FROM test where type = "person"');
    bucket.query(query, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result);
    });
}

PersonModel.getById = function (data, callback) {
    bucket.get(data.id, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result.value);
    });
}

PersonModel.delete = function (data, callback) {
    console.log(data.id);
    const st = `UPDATE kiolyn SET isDelete = true where meta().id = "${data.id}"`;
    var query = N1qlQuery.fromString(st);
    console.log(data.id);
    bucket.query(query, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result);
    });
}

PersonModel.save = function (data, callback) {
    var person = {
        createBy: data.createBy,
        description: data.dbodyescription,
        isDelete: false,
        type: "person"
    }
    // var id = data.id ? data.id : uuid.v4();
    var id = data.id;
    bucket.upsert(id, person, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result);
    });
}
function CommentModel() {
}
module.exports.PersonModel = PersonModel;
module.exports.CommentModel = CommentModel;