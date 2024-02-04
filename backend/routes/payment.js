const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const KEY_ID = process.env.KEY_ID;
const KEY_SECRET = process.env.KEY_SECRET;

const verifyToken = require('../middleware/verifyToken')
const Cart = require('../models/cart/Cart')
const Razorpay = require('razorpay');
const Order = require('../models/order_history/Order_history')
router.post('/orders', (req, res) => {

    var instance = new Razorpay({ key_id: `${KEY_ID}`, key_secret: `${KEY_SECRET}` })

    var options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        if (err) {
            res.send({ success: false, code: 500, message: err });
        }
        else {
            res.send({ success: true, code: 200, data: order, message: "order created" })
        }
    });

})

router.post('/verify', async (req, res) => {

    try {
        let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

        var expectedSignature = crypto.createHmac('sha256', KEY_SECRET).update(body.toString()).digest('hex');

        if (expectedSignature === req.body.response.razorpay_signature) {
            res.send({ success: true, message: "Sign Valid" });
        }
        else {

            res.status(500).send({ success: false, msg: "Sign In valid" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "some error occured" });
    }

})

router.post('/order', verifyToken, async (req, res) => {
    try {
        // Create a new order instance with the request data

        const newOrder = new Order({
            ...req.body,
            user: req.userId // Set the user field to req.userId
        });
        // Save the order to the database
        await newOrder.save();

        res.status(201).json({ success: true, newOrder });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

router.get('/getorder', verifyToken, async (req, res) => {


    try {
        const history = await Order.find({ user: req.userId } );

        if (!history) {
            return res.status(404).json({ success: false, error: 'No orders found' });
        }

        if (history) {
             res.json({ success: true, history });

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, error });

    }


})

module.exports = router;