var uuid = require("uuid");
var N1qlQuery = require("couchbase").N1qlQuery;
var bucket = require("./app").bucket;

function PersonModel() {

}

PersonModel.getAll = function (callback) {
    
    // var statement = 'SELECT' +
    //                 'id, name, class' +
    //                 'FROM' + bucket._name + 
    //                 'WHERE type="person"';
    //const st = `SELECT kl.type kl.name FROM \`kiolyn-local\` as kl WHERE isDelete = false`
    const st = `SELECT kl.type, kl.name, kl.createBy,description  FROM kiolyn as kl WHERE isDelete = false`
    var query = N1qlQuery.fromString(st);
    console.log('----------------------------------', query);
    // var query = N1qlQuery.fromString(statement);
    bucket.query(query, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result);
    });
}

PersonModel.create = function (data, callback) {
    var person = {
        name: data.name,
        type: data.type,
        createBy: data.createBy,
        description: data.description,
        isDelete: false
        //type: "person"
    }
    var id = data.id ? data.id: uuid.v4();
    bucket.upsert(id, person, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result);
    });
}

PersonModel.update = function (data, callback) {
    var person = {
        name: data.name,
        type: data.type,
        createBy: data.createBy,
        description: data.description,
        isDelete: false
        //type: "person"
    }
    var id = data.id
    bucket.upsert(id, person, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result);
    });
}

PersonModel.getById = function (data,callback){
    bucket.get(data.id,function(error,result){
        if (error){
            console.log(error);
            return callback(error, null);
        }
        callback(null, result.value);
    });
}

// PersonModel.delete = function (data, callback) {
//     const st = `UPDATE kiolyn SET isDelete = true WHERE meta().id = "${data.id}"`;
//     var query = N1qlQuery.fromString(st);
//     console.log(data.id)
//     bucket.query(query, function (error, result) {
//         if (error) {
//             console.log(error);
//             return callback(error, null);
//         };
//         callback(null, result);
//     });
// }

PersonModel.delete = function (data, callback) {
    const st = `UPDATE kiolyn SET isDelete = true where meta().id = "${data.id}"`;
    var query = N1qlQuery.fromString(st);
    console.log(data.id);
    bucket.query(query, function (error, result) {
        if (error) {
            console.log(error);
            return callback(error, null);
        };
        callback(null, result );
    });
}

module.exports.PersonModel = PersonModel;
//module.exports.CommentModel = CommentModel;
