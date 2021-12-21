const config = require("dotenv").config();
const express = require("express");
const app = express();
const productsRouters = require('./routes/products')
app.use(express.json());
app.use('/api/products' , productsRouters);
app.listen(process.env.PORT, ()=> console.log('serve is runing on port :'+process.env.PORT))