// TODO: подключить модель для сущности
const model = require("../models/user");
// Create => POST
exports.post = function (request, response) {
   console.log("Run POST");
   const element = new model(request.body);
   element.save(function (err) {
      if (err) {
            console.log(err);
            return err;
      }
      return response.json(element);
   });
}

// Read => GET All
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

// Read => GET One
exports.getOne = function (request, response) {
   const {user_id} = request.params;
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

// Поиск пользователя по email
exports.findByEmail = function (request, response) {
   const {email} = request.params;
   model.find({email: email},
      function (err, allData ) {
            if (err){
               console.log(err);
               return err;
            }
            // if (allData.length > 0) return false;
            response.json(allData);
      }
   );
}

// Проверить наличие почты в базе
exports.testByEmail = function (request, response) {
   const {email} = request.params;
   model.find({email: email},
      function (err, allData ) {
            if (err){
               console.log(err);
               return err;
            }
            console.log("testByEmail:");
            console.log(allData);
            if (allData.length > 0)
            {
               console.log("True");
               response.send(true);
            } else
            {
               console.log("False");
               response.send(false);
            }
      }
   );
}

// Найти пользователя по email & password
exports.findByEmailPswd = function (request, response) {
   const {email} = request.params;
   const {password} = request.params;
   model.find({email: email, password: password},
      function (err, allData ) {
            if (err){
               console.log(err);
               return err;
            }
            // console.log("findByEmailPswd:");
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