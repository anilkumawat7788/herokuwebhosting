const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/youtubeRegistration",
 {useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true})
 .then(()=>{
     console.log("connection successfuly..")
 }).catch((err) => {
console.log(err);
 });