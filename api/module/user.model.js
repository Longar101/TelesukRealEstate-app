const mongoose = require('mongoose');
//mongoose provide two method schema and the model export
const userSchema = new mongoose.Schema(
             
    {
           username:
           {
                  type:String,
                  require:[true, "user name is mandatory !"],
                  unique:[true, "user name should be unique"],
                  maxLength:[25, "maximum length of character should be 25"]
            },

            userage:
            {          
                type:Number,
                required : [true, "age is mandatory"]

            },
            email:{
                   type: String,
                   required: true,
                   unique: true

            },
            password:{
                 type:String,
                 required:true,
                 unique:[ true,"password userpassword should be unique"]
            }
        },{timestamps:true}
        
)

const userModel = mongoose.Schema("User",userSchema)

module.exports = userModel;