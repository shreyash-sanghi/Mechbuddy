const express = require('express');
const router = express.Router();


const verifyToken = require('../middleware/verifyToken')
const Cart = require('../models/cart/Cart')

router.post('/addcart', verifyToken, async (req, res) => {

    try {
        const { item_title, item_id, item_price, item_count, item_category } = req.body;
        let cart = ";"
        if (req.body.item_category) {
            cart = new Cart({
                item_title, item_id, item_price, item_count, item_category, user: req.userId
            })
        }
        else {

            cart = new Cart({
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

router.get('/getcart', verifyToken, async (req, res) => {

    try {
        let userId = req.userId;//getting id of logged in user

        const cartItems = await Cart.find({ user: userId }).lean();

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

router.delete('/deletecart/:id', verifyToken, async (req, res) => {

    try {

        let cartitem = await Cart.findById(req.params.id);
        if (!cartitem) { return res.status(404).send({ msg: "Item Not found in the cart" }) }

        if (cartitem.user.toString() !== req.userId) {
            return res.status(401).send("authentication failed");
        }

        cartitem = await Cart.findByIdAndDelete(req.params.id);
        res.json({ success: true, msg: "cart item has been delted", cartitem });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "cart item deletion failed" });
    }

})

router.delete('/deleteallcart', verifyToken, async (req, res) => {

    try {
        let userId = req.userId;

        let cartitem = await Cart.find({ user: userId }).lean();

        if (!cartitem) { return res.status(404).send({ msg: "Item Not found in the cart" }) }



        cartitem = await Cart.deleteMany({ user: userId });
        res.json({ success: true, msg: "cart item has been delted", cartitem });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "cart item deletion failed" });
    }

})




module.exports = router;