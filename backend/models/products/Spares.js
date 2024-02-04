const mongoose = require("mongoose");
const { Schema } = mongoose;
//brand->model->

const spareschema = new Schema(
    {
        
        spare_id: {
            type: String,
            required: true
        },
        spare_name: {
            type: String,
            required:true
        },
        spare_price: {
            type: Number,
            required:true
        },
        spare_category: {
            type: String,
            required: true
        },
        spare_vehicle_model: {
            type: String,
            required: true,

        }
    }
)
const Spares = mongoose.model('spare', spareschema);

module.exports = Spares;