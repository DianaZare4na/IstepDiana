// TODO: Дать название модели, и описать ее поля
// Подключим настройку модели (Схемы) DB
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Опишем нашу модель
const Product = new Schema({
    name: String,
    price: Number,
    des: String,
    img: String,
    gallery: []
});

// Экспортируем модель нашего студента
module.exports = mongoose.model("Product", Product);