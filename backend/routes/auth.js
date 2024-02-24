const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "mysecret";
const Customer = require('../models/user_access/Customer');
const Vendor = require('../models/user_access/Vendor');
const verifyToken = require('../middleware/verifyToken')
const cors = require('cors');


router.use(cors());

router.post('/logout' , (req,res) => {
  res.cookie('token' , ' ',{ httpOnly: true, sameSite: 'none' , secure:'true'}).json(true);
});

// User Signup endpoint
router.post('/usersignup', async (req, res) => {
  let success = false;
  try {

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a Customer
    const user = new Customer({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      role:req.body.role
    });

    // Save the user to the database
    await user.save();
    const authtoken = jwt.sign({ userId: user._id }, JWT_SECRET);

    success = true;

    res.status(201).json({ success, authtoken, message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({
      success,
      error: 'Internal Server Error',
      errorMessage: err.message, // Include the error message for debugging
    });
  }
});

//User Login endpoint
router.post('/userlogin', async (req, res) => {
  let success = false;
  try {
    // Find the user by email
    const user = await Customer.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Create a JWT token
    const authtoken = jwt.sign({ userId: user._id }, JWT_SECRET);
    // const authtoken = jwt.sign({ userId: user._id }, JWT_SECRET,{
    //   expiresIn: 60*60
    // });
    success = true
    const role = user.role;
    res.json({ success, authtoken,user});
  } catch (err) {
    res.status(500).json({ success, error: err.message });
  }
}); 


//User details usertoken
router.get('/userinfo', verifyToken, async (req, res) => {
  try {
    // Use req.userId to retrieve user information from the database
    const id = req.userId;
    const user = await Customer.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Send user information as a response

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
//User details usertoken
router.get('/userinfo', verifyToken, async (req, res) => {
  try {
    // Use req.userId to retrieve user information from the database
    const id = req.userId;
    const user = await Customer.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Send user information as a response

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
// Home Page
router.get('/homepage',verifyToken,async (req, res) => {
  try {
    const id  = req.userId;
    const data = await Customer.findById(id);
    const role = data.role;
   res.status(202).json({role,id});
  } catch (err) {
    res.sendStatus(404);
  }
});


// Vendor Service Add
router.post('/addvendor', async (req, res) => {
  let success = false


  try {
    const newVendor = new Vendor({
      name: req.body.vendorData.name,
      phone: req.body.vendorData.phone,
      email: req.body.vendorData.email,
      shop_name: req.body.vendorData.shop_name,
      shop_address: req.body.vendorData.shop_address,
      vendor_description: req.body.vendorData.vendor_description,
      vendor_average_price: req.body.vendorData.vendor_average_price,
      vendor_working_days: req.body.vendorData.vendor_working_days,
      vendor_working_hours: req.body.vendorData.vendor_working_hours,
      service_category: req.body.vendorData.service_category,
      plans: req.body.vendorData.plans,
      addons: req.body.vendorData.addons

    });




    // Save the new vendor to the database
    await newVendor.save();
    console.log(newVendor);
    success = true
    res.status(201).json({ success, newVendor });

  } catch (err) {
    res.status(500).json({ success, error: err.message });
  }
});


router.get('/getvendorbyid/:id', async (req, res) => {
  const vendorId = req.params.id;
  try {
    const vendors = await Vendor.find({ _id: vendorId });
    if (vendors) {
      res.json({ success: true, vendors });
    }
    else {
      res.json({ success: false, msg: "notfound" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
})

router.get('/get_vendors', async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    if (vendors) {
      res.json({ success: true, vendors });
    }
    else {
      res.json({ success: false, msg: "notfound" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
})

// Vendor Login endpoint
router.post('/vendorlogin', async (req, res) => {
  try {
    // Find the user by email
    const user = await Vendor.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;