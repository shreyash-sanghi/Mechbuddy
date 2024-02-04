//main file to connect to databases

const mongoose=require('mongoose');//importing mongoose 
const URI=process.env.DB;

mongoose.connect(`${URI}`)        //URI for local host
.then(()=>{console.log(" Data-Base connect sucessfully....")})
.catch((e)=>{console.log(e)})

// const connectomongo=()=>{
//     mongoose.connect(`${URI}`);//URI for local host
//     console.log("DB connected");
// }

// module.exports=connectomongo;