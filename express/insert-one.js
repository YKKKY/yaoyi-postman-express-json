var fs = require("fs");

var id = 0;

function nextId() {
    id += 1;
    return id;
}

function getElement(item) {
    var element = {};

    element.id = nextId();
    element.name = item.name;
    element.barcode = item.barcode;
    element.unit = item.unit;
    element.price = item.price;

    return element;
}

function judgeType(item) {
    var newItem = getElement(item);
    if (typeof(newItem.barcode) === "string" && typeof(newItem.name) === "string"
        && typeof(newItem.unit) === "string" && typeof(newItem.price) === "number") {

        return newItem;
    } else {
        return false;
    }
}

function insertOne(req, res) {
    var data = JSON.parse(fs.readFileSync("./users.json"));
    var newItem = judgeType(req.body);

    if (!newItem) {
        res.status(400).end();
    } else {
        data.push(newItem);
        fs.writeFile("users.json", JSON.stringify(data), function (err) {
            if (err) {
                throw err;
            } else {
                res.status(200).json(newItem);
            }
        });
    }
}

exports.judgeType = judgeType;
exports.insertone = insertOne;
