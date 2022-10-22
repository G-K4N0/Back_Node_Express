//Constants and required package
const express=require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/user");
const port = 3000;

require("dotenv").config();



//Middleware
app.use(express.json());
app.use('/api', userRoutes);



//Mongodb Connect
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Connected with mongodb'))
.catch((error)=> console.error(error));

//Server Listen
app.listen(port, ()=> console.log('Server running on port', port));