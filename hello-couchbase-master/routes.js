var PersonModel = require('./../hello-couchbase-master/models').PersonModel;

var appRouter = function (app) {

    app.get('/getAll', function (req, res) {
        PersonModel.getAll(function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.get('/api_luongvp/:id', function (req, res) {
        PersonModel.getById(req.params, function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        })
    });

    app.post("/api_luongvp", function (req, res) {
        PersonModel.save(req.body, function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.put("/api_luongvp", function (req, res) {
        PersonModel.save(req.body, function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        });
    });

    app.put('/delete/:id', function (req, res) {
        PersonModel.delete(req.params, function (error, result) {
            if (error) {
                return res.status(400).send(error);
            }
            res.send(result);
        })
    });



}

module.exports = appRouter;