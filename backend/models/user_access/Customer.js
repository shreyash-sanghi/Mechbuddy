const mongoose=require("mongoose");
const {Schema}=mongoose;

const customerschema=new Schema(
    {
        
        name:{
            type:String,
            required:true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        phone:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        }
    }
)
const Customer = mongoose.model('Customer', customerschema);

module.exports=Customer;