const express = require("express");
const app=express();
const cookieParser = require("cookie-parser");
const cors=require("cors");
const bodyParser=require("body-parser");
const fileUpload=require("express-fileupload");


const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload());

//Route Imports
const product = require("./routes/productRoute");
const user= require("./routes/userRoute");
const order=require("./routes/orderRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);

// app.post('/api/v1/login',(req,res)=>{
//     res.json({data:"Hello BC"});
// })
//MiddleWare for error
app.use(errorMiddleware);
module.exports = app;