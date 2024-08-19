const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./config/mongooseConnect');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');
const ownerRouter = require('./routes/ownersRouter');
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");


//Router Setup
app.use("/users",userRouter)
app.use("/products",productsRouter)
app.use("/owner",ownerRouter)



app.listen('3000',()=>console.log("Server Start"));