var PersonModel = require("./models").PersonModel

var appRouter = function (app) {
    app.get("/api_phongnd", function (req, res) {
        PersonModel.getAll(function(error,result){
            if (error) {
                return res.status(400).send(error)
            }
            res.send(result);
        })
    });

    app.get("/api_phongnd/:id", function (req, res) {
        PersonModel.getById(req.params,function(error,result){
            if(error){
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.post("/api_phongnd", function (req, res) {
        PersonModel.create(req.body, function(error, result) {
            if(error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.put("/api_phongnd", function (req, res) {
        PersonModel.update(req.body, function(error, result) {
            if(error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.put('/delete/:id', function (req, res) {
        PersonModel.delete(req.params, function(error, result) {
            if(error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    // app.put('/delete/:id', function (req, res) {
    //     PersonModel.delete(req.params, function (error, result) {
    //         if (error) {
    //             return res.status(400).send(error);
    //         }
    //         res.send(result);
    //     })
    // });
}
module.exports = appRouter;