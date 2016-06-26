var fs = require('fs');

function findOne(req, res) {
    fs.readFile(fileName, "utf-8", function (err, data) {
        var id = req.params.id;

        if (err)
            throw err;
        else {
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    res.status(200).json(data[i]);
                }
            }
        }
    });
}

function findAll(req, res) {
    fs.readFile(fileName, "utf-8", function (err, data) {
        if (err)
            throw err;
        else
            res.status(200).json(JSON.parse(data));
    });
}

exports.findOne = findOne;
exports.findAll = findAll;
