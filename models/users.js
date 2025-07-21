const mongoose= require("mongoose")

// users schema
const user_schema= new  mongoose.Schema(
    // key value pair structured schema
    {
        name:String,
        age:Number,
        email:String

    }
);


// create the model

const User=mongoose.model("User", user_schema)

// export
module.exports=User;