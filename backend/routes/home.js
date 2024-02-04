const express = require('express');
const router = express.Router();

router.get("/api/home",(req,res)=>{
    try {
        coonsole.log("Hello");
        res.sendStatus(202);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;