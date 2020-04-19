const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");

var app=express();

app.use(bodyParser.json());
app.use(express.static("./"));
app.post("/tabledata",(req,res)=>{
  res.sendFile(path.resolve("./public/jsondata.json"));
});

const port=process.env.PORT||5000;
app.listen(port,()=>console.log("backend working"));
