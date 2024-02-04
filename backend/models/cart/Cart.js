const mongoose = require("mongoose");
const { Schema } = mongoose;
//brand->model->

const cartitem = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer'
        },
        item_title: {
            type: String,
            required: true
        },
        item_category: {
            type: String,
            default: ""
        },
        item_count: {
            type: Number

        },
        item_id: {
            type: String,
            required: true
        },
        item_price: {
            type: Number,
            required: true,

        }
    }
)
const Cart = mongoose.model('cartitem', cartitem);

module.exports = Cart;