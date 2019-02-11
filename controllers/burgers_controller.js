var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll({}).then(function (result) {

            res.render("index", {
                burger_data: result
            })
        });
    });


    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            name: req.body.name
        }).then(function (result) {
            res.redirect("/");
            // res.json(result);

        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.status(200).end();
        });
    });
}