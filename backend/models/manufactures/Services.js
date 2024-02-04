const mongoose=require("mongoose");
const {Schema}=mongoose;
//brand->model->
const ServicesSchema=new Schema(
    {
        service_name:{
            type:String,
            required:true
        },
        service_image: {
            type: String,
            required: true
        },
        service_description: {
            type: String,
            required: true,
        },
        service_feature: {
            type: String,//have to change
            required:true
        },
        service_price: {
            type: Number,
            required:true
        }
    }
)

module.exports=mongoose.model('service',ServicesSchema);