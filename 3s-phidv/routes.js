var ItemsModel = require("./models").ItemsModel;

var appRouter = function(app){
    
    app.get("/item", function(req, res){
        ItemsModel.getAll(function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    });

    app.get('/item/:id', function(req, res){
        ItemsModel.getById(req.params, function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    });

    app.post("/item", function(req, res){
        ItemsModel.insert(req.body, function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    });

    app.put("/item", function(req, res){
        ItemsModel.update(req.body, function(error, result){
            if(error){
                return res.status(400).send(error)
            }
            res.send(result);
        })
    })
}

module.exports = appRouter;