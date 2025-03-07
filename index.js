const express=require("express");
const mongoose=require("mongoose");

//set up server
const app=express();

app.use(express.json())

app.listen(5000, ()=> console.log("server started"))

//set up router
app.use("/",require("./routes/snippet"));
app.use("/posttest",require("./routes/snippet"));