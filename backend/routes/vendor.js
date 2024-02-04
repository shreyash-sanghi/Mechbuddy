const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "mysecret";
const Customer = require('../models/user_access/Customer');
const Vendorauth = require('../models/admin_vendor/Vendor_auth');
const verifyToken = require('../middleware/verifyToken')


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


module.exports = router;