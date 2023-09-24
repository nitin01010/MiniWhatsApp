const mongoose = require("mongoose");
const url = process.env.WhatsApp

const Main = async () => {
    try {
        await mongoose.connect(url);
        console.log("db is connect");
    } catch (error) {
        console.log('there is error in db');
    }
}
Main();

const whatsAppShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: [true, 'This User Name already Taken!']
    },
    form: {
        type: String,
    },
    to: {
        type: String,
    },
    msg: {
        type: String,
    }
});

const WhatsAppModel = mongoose.model('whatsApp', whatsAppShema);

module.exports = WhatsAppModel;