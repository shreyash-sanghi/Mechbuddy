const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  products: [{
    item_title: String,
    item_category: String,
    item_price: Number,
    item_count: Number,
    item_id: String
  }],
  totalAmount: Number,
  orderStatus: String,
  order_date: {
    type: Date,
    default: Date.now
  },
  time_slot:String,
  order_completion: String,//date
  paymentStatus: String,
  name: String,
  mobile: Number,
  pincode: Number,
  state: String,
  city: String,
  full_address: String,
  landmark: String,
});


const Orders = mongoose.model('order', orderSchema);

module.exports = Orders;