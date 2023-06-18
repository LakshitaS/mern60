const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
require("dotenv").config();

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://user123:81a325F1@cluster0.kyiavl5.mongodb.net/mernin60_database?retryWrites=true&w=majority")
// mongoose.connect("mongodb+srv://user123:Password  @cluster0.j7fql.mongodb.net/merntutorial?retryWrites=true&w=majority");


app.get("/getUsers", (req, res) => {

    UserModel.find().then((err,data) => {
        if(err){
            res.json(err);
        }else{
            res.json(data);}
    });
});

app.post("/createUser",async (req,res)=>{
    const user=req.body;
    const newUser=new UserModel(user);
    await newUser.save();

    res.json(user)
});

// app.post()

app.listen(process.env.PORT || 3001,()=>{
    console.log("started at port 3001");
});