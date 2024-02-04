const express = require('express');
const router = express.Router();
const SupportSchema = require("../models/support/Support");

router.post("/mysupport",async(req,res)=>{
    try {
        const {floating_name,floating_contact,repeat_query} = req.body;
        await  SupportSchema.create({floating_name,floating_contact,repeat_query});
        res.sendStatus(202);
    } catch (error) {
        console.log(error);
        res.status(404),json({error});
    }
})

module.exports = router;