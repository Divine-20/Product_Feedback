const mongoose = require('mongoose')

const connectDB = async (url)=>{
  await  mongoose.connect(url).then(()=>{
      console.log('Database successfully connected');
  }).catch((error)=>{console.log(error)})
}
module.exports = connectDB;