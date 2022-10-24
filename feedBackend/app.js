
 const express = require('express');
const router = require('./Routes/Route.js')
const routing = require('./Routes/authRoute.js')
const cors = require('cors');

const connectDB = require('./config/db');


//dotenv    


const app = express();
const dotenv = require('dotenv');
   dotenv.config();

connectDB(process.env.MONGO_URL)
app.use(cors());
 app.use(express.json())
 app.use('/Api/v1/auth', routing);
 app.use('/Api/feedback',router);
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
});

