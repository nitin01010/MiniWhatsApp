const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const Port = process.env.Port

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(require("./routes/useRoutes"));
app.use(require("./Api/Api"));
app.use(require("./db/dbcon"));
const WhatModel = require("./db/dbcon");


app.listen(Port, () => {
    console.log(`server is runing ${Port}`);
});



