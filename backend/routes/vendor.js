const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "mysecret";
const Customer = require('../models/user_access/Customer');
const Order = require('../models/order_history/Order_history');
const Vendorauth = require('../models/admin_vendor/Vendor_auth');
const Vendor = require('../models/user_access/Vendor');
const verifyToken = require('../middleware/verifyToken');


/* vendor login */
router.post('/vendorlogin', async (req, res) => {
  let success = false;
  try {
    // Find the vendor by username
    const vendor = await Vendorauth.findOne({ username: req.body.username });

    if (!vendor) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(req.body.password, vendor.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Create a JWT token
    const authtoken = jwt.sign({ vendorId: vendor._id }, JWT_SECRET);
    success = true

    res.json({ success, authtoken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success, error: err.message });
  }
});

router.post('/vendorsignup', async (req, res) => {
  let success = false;
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new Vendorauth({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone
    });

    await user.save();
/*     const authtoken = jwt.sign({ userId: user._id }, JWT_SECRET);
 */
    success = true;

    res.status(201).json({ success, message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ success, error: err.message });
  }
});


router.get("/get_vendor_product/:id",verifyToken,async(req,res)=>{
  try {
    const id= req.params.id;
    const Emaildata = await Customer.findById(id);
    const email = Emaildata.email;
    const Vid = await Vendor.findOne({email});
    const data = await Order.find();
      const vid = Vid._id;
    res.status(202).json({data,vid});
  } catch (error) {
    console.log(error);
    res.status(404).json({error})
  }
})
router.get("/get_vendor_card/:id",verifyToken,async(req,res)=>{
  try {
    const id= req.params.id;
    const Emaildata = await Customer.findById(id);
    const email = Emaildata.email;
    const data = await Vendor.findOne({email});
       res.status(202).json({data});
  } catch (error) {
    console.log(error);
    res.status(404).json({error})
  }
})
router.get("/getvenderaccountdata/:id",verifyToken,async(req,res)=>{
  try {
    const id= req.params.id;
    const data = await Customer.findById(id);
       res.status(202).json({data});
  } catch (error) {
    console.log(error);
    res.status(404).json({error})
  }
})

router.post("/edit_vendor/:id",verifyToken,async(req,res)=>{
  try {
    const id= req.params.id;
    console.log(req.body.name);
    const data = await Vendor.findByIdAndUpdate(id,{

      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      shop_name: req.body.shop_name,
      shop_address: req.body.shop_address,
      vendor_description: req.body.vendor_description,
      vendor_average_price: req.body.vendor_average_price,
      vendor_working_days: req.body.vendor_working_days,
      vendor_working_hours: req.body.vendor_working_hours,
      service_category: req.body.service_category,
      plans: req.body.plans,
      addons: req.body.addons
    });
       res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(404).json({error})
  }
})

router.delete("/delete_cusomer_order/:id",verifyToken,async(req,res)=>{
  try {
    const id  = req.params.id;
   const deletedata = await Order.findByIdAndDelete(id);
   console.log(deletedata)
   res.sendStatus(202);
  } catch (error) {
    console.log(error);
    res.status(404).json({error})
  }
})

module.exports = router;