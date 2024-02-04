const mongoose=require("mongoose");
const {Schema}=mongoose;
//brand->model->
const SupportSchema=new Schema(
    {
        floating_name:{
            type:String,
            required:true
        },
        floating_contact: {
            type: Number,
            required: true
        },
        repeat_query: {
            type: String,
            required: true,
        },
    }
)

module.exports=mongoose.model('support',SupportSchema);