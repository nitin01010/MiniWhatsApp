const express = require("express");
const WhatsAppModel = require("../db/dbcon");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const dataRender = await WhatsAppModel.find({});
        res.render("Home.ejs", { data: dataRender });
    } catch (error) {
        res.status(401).send(`there is one error`.red.white);
    }
});

router.get("/chat", async (req, res) => {
    try {
        res.render("ChatPage.ejs");
    } catch (error) {
        res.status(401).send(`there is one error`);
    }
});

router.get("/delete/api/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await WhatsAppModel.findByIdAndDelete({ _id: id });
        res.redirect("/")
    } catch (error) {
        console.log(error);
        res.status(401).send(`there is one error`);
    }
});




module.exports = router;
