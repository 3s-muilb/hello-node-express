var ExamModel = require("./models").ExamModel;

var router = function(app){
    
    app.get("/hoand", function(req, res){
        ExamModel.getAll(function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    });

    app.get('/hoand/:id', function(req, res){
        ExamModel.getById(req.params, function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    })
    app.post("/item", function(req, res){
        ExamModel.insert(req.body, function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    });

    app.put("/item", function(req, res){
        ExamModel.update(req.body, function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    })

    app.delete("/item/:id", function(req, res){
        ExamModel.delete(req.params, function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    })
}
    module.exports.router=router;