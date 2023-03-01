const express = require("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
require('./Database/dbConnection')
const apiRoutes = require('./routes/router')

app.use(cors());
app.use(express.json());
app.use('/api',apiRoutes)

const port = process.env.PORT || 8000 
app.listen(port, () => {    console.log(`Admin backend service one started on port ${port}`)})

