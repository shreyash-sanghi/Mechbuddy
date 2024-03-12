const mongoose = require("mongoose");
const { Schema } = mongoose;
//brand->model->

const vendorPlanSchema = new Schema({
    /* planname */
    planname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    card_switch:{
        type:Boolean
    }
});

const addonSchema = new Schema({
    addon_name: {
        type: String,
        required: true,
    },
    addon_price: {
        type: Number,
        required: true,
    },
});

const vendorSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
        },
        shop_name: {
            type: String,
            required: true,
        },
        shop_address: {
            type: String,
            required: true,
        },
        vendor_description: {
            type: String,
            required: true,
        },
        vendor_average_price: {
            type: String,
            required: true,
        },
        vendor_working_days: {
            type: String,
            required: true,
        },
        vendor_working_hours: {
            type: String,
            required: true,
        },
        service_category: {
            type: String,
            required: true
        },
        plans: [vendorPlanSchema],
        addons: [addonSchema]

    }
)
const Vendor = mongoose.model('vendorinfo', vendorSchema);

module.exports = Vendor;