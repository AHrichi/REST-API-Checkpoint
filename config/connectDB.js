const mongoose=require("mongoose");
require('dotenv').config()

const connectDB=async()=>{
    try {

        let result = await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true},
            console.log(`database connected ${process.env.DB_URI}`)  )  

    } catch (error) {
        console.log(`no connection${error}`)
        
    }


}
module.exports=connectDB