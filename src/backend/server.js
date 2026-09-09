require("dotenv").config();
const server=require("express");
const app=server();
const port=8080;
const mongoose=require("mongoose");
const authroute=require("./routes/authRoutes.js");
const cors = require("cors");
const blogroute=require("./routes/blogroute.js");

app.use(cors());

app.use(server.urlencoded({extended:true}));
app.use(server.json());
mongoose.connect('mongodb://127.0.0.1:27017/internship').then(()=>{
    console.log("mongodb connection succesfull")
})
.catch(()=>{
        console.log("mongodb connection failed");
    })

app.use("/api/auth",authroute);
app.use("/api/blogs",blogroute);
app.get("/home",(req,res)=>{
    res.send("you are in home page");
});

app.listen(port,()=>{
    console.log(`server start it ${port}`);
});
