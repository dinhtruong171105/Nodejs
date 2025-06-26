import express from "express";
import bodyParser from "body-parser";
//Thư viện bodyParser
import viewEngine from "./config/viewEnigine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();
// "require('dotenv').config();" giúp chạy được "process.env.PORT"

let app = express();

//config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
// Để lấy được tham số trong file .env phải sử dụng "process.env.PORT"
//PORT === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on port: " + port)
})