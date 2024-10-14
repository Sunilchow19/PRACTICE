var express= require("express");

var app=express();

var mysql2= require("mysql2");


var conn=mysql2.createConnection({

    host:"localhost",
    user:"root",
    password:"chaitu1504",
    database:"dummy"
})

conn.connect((err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log("conected to mysql db");
        
    }
})


app.get("/",(req,res)=>{


    res.send("hello ")
}
)

var port=0;
app.listen(port,()=>{


    console.log(`localhost:${port}`);
    

})