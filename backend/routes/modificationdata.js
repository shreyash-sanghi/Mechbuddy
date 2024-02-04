const express = require('express');
const verifyToken = require('../middleware/verifyToken')


const modificationdata = require('../models/modificationdata/modificationdata');
const Customer = require('../models/user_access/Customer');
const router = express.Router();


router.post('/submit_modification',verifyToken, async (req,res) => {
    try {
        const user = await Customer.findById(req.userId);
        
        const {  url1,url2,url3,url4,vehicle_model,style_description}=req.body;
        let modification_data = new modificationdata({
            name:user.name,email:user.email,phone:user.phone,url1,url2,url3,url4,vehicle_model,style_description
        })
        modification_data = await modification_data.save();
        res.json({ success: true, modification_data });

    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "some error occured" });
    }

})



module.exports = router;