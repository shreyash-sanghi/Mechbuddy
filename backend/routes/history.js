const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const History = require('../models/order_history/Order_history')

router.post('/addhistory', verifyToken, async (req, res) => {

    try {
        const { item_title, item_id, item_price, item_count, item_category } = req.body;
        let cart = ";"
        if (req.body.item_category) {
            cart = new History({
                item_title, item_id, item_price, item_count, item_category, user: req.userId
            })
        }
        else {

            cart = new History({
                item_title, item_id, item_price, item_count, user: req.userId
            })
        }
        const savedcart = await cart.save();

        res.json({ success: true, savedcart });

    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "some error occured" });
    }

})

router.get('/gethistory', verifyToken, async (req, res) => {

    try {
        let userId = req.userId;//getting id of logged in user

        const cartItems = await History.find({ user: userId }).lean();

        if (cartItems) {
            res.json({ success: true, cartItems });
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