const express = require('express');
const app =express();
require('dotenv').config();
const mongoose =require('mongoose');//importing mongoose 
require("./db.js");
const port = process.env.PORT || 8000

const cors = require('cors')
app.use(cors());  //cors middleware

// const Vendor = require('./models/user_access/Vendor');

app.use(express.json());
app.use('/api/auth', require('./routes/auth')); 
app.use('/api/cart', require('./routes/cart'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/product', require('./routes/products'));
app.use('/api/modification', require('./routes/modificationdata'));


app.use('/api/vendor', require('./routes/vendor'));

app.use('/api/support', require('./routes/support'));
// mongoose.connect(process.env.URI).then(()=>{console.log("db connected")}).catch((err)=>{console.log(err)});



// /* connectiontomongodb(); */
app.get('/', (req, res) => {
    res.send('Hello mechbuddy');
})



//here
// const sampleVendorData = {
//     name: "ABRAR AHMED",
//   email: "afgua@gbadfd.com",
//   phone: "8839056850",
//   shop_name: "BABA HERO HONDA SERVICE CENTER",
//   shop_address: "GHANTA GHAR, JABALPUR",
//   vendor_description: "Providing quality auto repair services",
//   vendor_average_price: "200",
//   vendor_working_days: "Monday to Friday",
//   vendor_working_hours: "9:00 AM to 6:00 PM",
//   service_category: "Auto Repair",
//   plans: [
//     {
//       planname: "Basic Service",
//       price: 100,
//     },
//     {
//       planname: "Premium Service",
//       price: 150,
//     },
//   ],
//   addons: [
//     {
//       addon_name: "Tire Rotation",
//       addon_price: 20,
//     },
//     {
//       addon_name: "Oil Change",
//       addon_price: 30,
//     },
//   ],
// };


// const vendor = new Vendor(sampleVendorData);
// vendor.save()
//   .then((savedVendor) => {
//     console.log('Vendor data saved successfully:', savedVendor);
//   })
//   .catch((error) => {
//     console.error('Error saving vendor data:', error);
//   });
//here


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});



