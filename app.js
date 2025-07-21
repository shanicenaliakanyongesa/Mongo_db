const mongoose = require("mongoose");
const User = require('./models/users');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => {
    console.log("Mongo Connected");

    // Insert multiple users
    const users = [
        { name: "Shanice", age: 24, email: "shanicenyongesa@gmail.com" },
        { name: "Brian", age: 28, email: "brian@gmail.com" },
        { name: "Linda", age: 22, email: "linda@gmail.com" },
        { name: "Kevin", age: 30, email: "kevin@gmail.com" }
    ];

    return User.insertMany(users); 
})
.then(() => {
    console.log("Users saved");
})
.catch(err => {
    console.error("Connection or Save Error:", err);
});



// Reading data 
User.find()
.then((user)=>{
 console.log(user)
})
.catch(err=>console.error(err))


// Finding one
User.findOne({name:"Shanice"})
.then(user=>console.log(user))




// Update data
User.updateOne({name:"Shanice"}, {age:26})
    .then(result =>console.log(result))

// Delete
User.deleteOne({ name: 'Brian' })
  .then(result => console.log(result));
