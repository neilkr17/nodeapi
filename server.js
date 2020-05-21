import express from "express"; //ECMA Script
//const express = require("express"); 

const app = express();
var response={name:"sundar"};
response.address="kathmandu";

app.get("/",(req,res)=>{
    //res.send("Hello World")
    res.json({
        home:"home"
    })
}) // ECMA Script

app.get("/user",(req,res)=>{
    //res.send("Hello World")
    res.json({
        ID:1,
        ...response
    })
})
app.get("/list",(req,res)=>{
    //res.send("Hello World")
    res.json({
        ID:1,
        list:[response, response]
    })
})
/*app.get("/",function (req, res){
    res.send("hello world")
});
*/
app.listen(80,()=>{
    console.log("server started")
});
