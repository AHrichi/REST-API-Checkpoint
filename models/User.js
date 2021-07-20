const mongoose=require('mongoose');

const schema=mongoose.Schema;
const UserSchema = new schema (

    {
        name : {
            type:String,
            required:true
        },

        email :{
            type: String,
            
        },
        phone :{
            type : Number
        }
        
    }


)
const User = mongoose.model('User',UserSchema)
module.exports=User