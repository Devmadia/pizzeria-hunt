const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});