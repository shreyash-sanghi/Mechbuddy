const express = require('express');
const Spares = require('../models/products/Spares');
const router = express.Router();


router.post('/addspare', async (req,res) => {

    try {
        const { spare_id,spare_name,spare_price,spare_category,spare_vehicle_model } = req.body;

       

        let spares = new Spares({
            spare_id,spare_name,spare_price,spare_category,spare_vehicle_model
        })
        spares = await spares.save();

        res.json({ success: true, spares });

    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "some error occured" });
    }

})

router.get('/getspare', async (req, res) => {

    try {
        
        
        let spares =await Spares.find({  });

        if (spares) {
            res.json({ success: true, spares });
        }
        else {
            res.status(500).send({ success: false, msg: "Not found item in cart" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "something wen wrong" });

    }


})


module.exports = router;