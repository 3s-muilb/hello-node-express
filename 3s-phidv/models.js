var uuid = require('uuid');
var N1qlQuery = require('couchbase').N1qlQuery;
const bucket = require('./dataBucket');

function ItemsModel(){}
ItemsModel.getAll = function(callback){
    var statement = 'SELECT id, type, createBy, description FROM \`kiolyn\`';
    console.log(statement);
    var query = N1qlQuery.fromString(statement);
    console.log(query);
    bucket.query(query, function(error, result){
        console.log(error, result);
        if(error){
            return callback(error, null);
        }
        callback(null, result);
    })
}

ItemsModel.getById = function(data, callback){
    bucket.get(data.id, function(error, result){
        if(error){
            return callback(error, null);
        }
        callback(null, result.value);
    });
}

ItemsModel.insert = function(data, callback){
    var item = {
        type : data.type,
        createBy : data.createBy,
        description : data.description,
        isDelete : false
    }
    //var id = data.id;
    var id = data.id ? data.id : uuid.v4();
    bucket.upsert(id, item, function(error, result){
        if(error) {
            // console.log(error);
            return callback(error, null);
        }
        callback(null, result);
    });
}

ItemsModel.update = function(data, callback){
    console.log(data);
    var statement = `UPDATE \`kiolyn\` 
                    WHERE meta().id = "${data.id}" 
                    SET type = "${data.type}",
                                createBy = "${data.createBy}",
                                description = "${data.description}",
                                isDelete = "${data.isDelete}"`;
    console.log(statement);
    var query = N1qlQuery.fromString(statement);
    console.log(query);
    bucket.query(query, function(error, result){
        console.log(error, result);
        if(error){
            return callback(error, null);
        }
        callback(null, result);
    })
}

ItemsModel.edit = function(data, callback){
    bucket.getById(data.id, function(error, result){
        if(data.id === undefined){
            return callback(error, null);
        }
        var items = result.value;
    })
}

ItemsModel.delete = function(data, callback){
    const delQuery = `UPDATE \`kiolyn\` SET isDelete = true WHERE meta().id = "${data.id}"`;
    const query = N1qlQuery.fromString(delQuery);
    bucket.query(query, function(error, result){
        if(error){
            return callback(error, null);
        }
        callback(null, result)
    })
}

module.exports.ItemsModel = ItemsModel;