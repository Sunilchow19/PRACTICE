var express= require("express");


var router=require("./router/index")

var app=express();

http://host:3000/api


require("dotenv").config();

app.use("/api",router);


app.get("/",(req,res)=>{

    res.send("hello enter the server")
})


var port=process.env.port;
app.listen(port,()=>{


    console.log(`localhost:${port}`);
    

})