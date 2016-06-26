var fs = require("fs");
var judgeType = require("./insert-one");

function newData(element, id) {
    var updateInput = {};
    updateInput.id = id;
    updateInput.barcode = element.barcode;
    updateInput.name = element.name;
    updateInput.unit = element.unit;
    updateInput.price = element.price;
    return updateInput;
}

function updateItem(req, res) {
    var data = JSON.parse(fs.readFileSync("./users.json"));
    var correctInput = judgeType.judgeType(req.body);

    if (!correctInput) {
        res.status(400).end();
    }else {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === parseInt(req.params.id)) {
                data[i] = newData(req.body, req.params.id);
                fs.writeFile("users.json", JSON.stringify(data), function (err) {
                    if (err)
                        throw err;
                    else
                        res.status(200).send(data);
                });
            }
        }
    }
}

exports.updateItem = updateItem;