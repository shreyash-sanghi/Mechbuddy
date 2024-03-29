const mongoose=require("mongoose");
const {Schema}=mongoose;

const vendorschema=new Schema(
    {
        
        name:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:true,
            unique:true
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
        },
        role:{
            type: String,
            required : true,
        }
    }
)
const Vendorauth = mongoose.model('Vendor_auth', vendorschema);

module.exports=Vendorauth;