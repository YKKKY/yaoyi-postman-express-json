var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

fs.exists('./users.json', function (exists) {
    if (!exists)
        fs.open('./users.json', 'a', function (err, fd) {
            if (err)
                console.log('创建文件失败');
            else {
                fs.writeFile('items.json', '[]', function (err) {
                        if (err)
                            throw err;
                    }
                );
            }
        });
});

app.post("/", require("./insert-one").insertOne);
app.delete("/:id", require("./remove-one").delete);
app.put("/:id", require("./update-one").updateItem);
app.get("/:id", require("./find").findOne);
app.get("/", require("./find").findAll);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;