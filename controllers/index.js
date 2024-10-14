var {gettingdata}=require("../models/index")


var users=async (req,res)=>{


    var data= await gettingdata();
    console.log(data);

    if(data){
        res.send(data)
    }else{

        res.send("hello ")
    }
    

}


module.exports={
    users

}