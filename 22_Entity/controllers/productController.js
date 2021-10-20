// TODO: подключить модель для сущности
const model = require("../models/product");
const fileController = require("./fileController");

// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new model(request.body);
    console.log(element);
    element.gallery = fileController.moveGallery(element.gallery, "/storage/products/product_");
    //    img: String,
    //     gallery: []
    // Проверить все поля на наличие /upload/ и если он есть - переместить файлы в новое место /public/storage/products
    // исправить все ссылки в создаваемой сущности

    element.save(function (err) {
        if (err) {
            console.log(err);
            return err;
        }
        return response.json(element);
    });
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
    model.find({},
        function (err, allData ) {
            if (err){
                console.log(err);
                return err;
            }
            response.json(allData);
        }
    );
}

// Update => PUT
exports.put = function (request, response) {
    console.log("Run PUT");
    const element = new model (request.body);
    model.findByIdAndUpdate(
        request.body._id,
        element,
        {}, // new:true - создаст новый если не нашел по ID
        function (err, result) {
            if (err) {console.log(err); response.send(err);}
            response.send(result);
        }
    );
}

// Delete => DELETE
exports.delete = function (request, response) {
    console.log("Run DELETE");
    model.findByIdAndDelete(
        request.body._id,
        {},
        function (err) {
            if (err) response.send(err);
            response.sendStatus(200);
        }
    );
}