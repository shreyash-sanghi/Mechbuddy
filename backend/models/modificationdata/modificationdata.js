const mongoose = require("mongoose");
const { Schema } = mongoose;

const Modificationschema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        url1: {
            type: String,
            required: true
        },
        url2: {
            type: String,
            required: true
        },
        url3: {
            type: String,
            required: true
        },
        url4: {
            type: String,
            required: true
        },
        vehicle_model: {
            type: String,
            required: true
        },
        style_description: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('modification_response', Modificationschema);