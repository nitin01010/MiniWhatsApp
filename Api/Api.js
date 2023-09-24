const express = require("express");
const WhatsAppModel = require("../db/dbcon");
const router = express.Router();

router.post("/chat/api", async (req, res) => {
    try {
        const data = WhatsAppModel({
            username: req.body.username,
            form: req.body.form,
            to: req.body.to,
            msg: req.body.msg,
        });
        const newdata = await data.save();
        res.status(201).redirect("/");
    } catch (error) {
        res.status(401).send('username is alredy taken !');
    }
});




module.exports = router;