var fs = require("fs");

function removeOne(req, res) {
    fs.readFile(fileName, "utf-8", function (err, data) {
        if (err)
            throw err;
        else {
            data = JSON.parse(data)
            var length = data.length;

            for (var i = 0; i < data.length; i++) {
                if (data[i].id == id)
                    data.splice(i, 1);
            }

            if (length == data.length)
                res.status(404).end();
            else {
                fs.writeFile(fileName, JSON.stringify(data), function (err) {
                    if (err)
                        throw err;
                     else
                        res.status(204).end();
                });
            }
        }
    });
}

exports.removeOne = removeOne;
