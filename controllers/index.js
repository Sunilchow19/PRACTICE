var {gettingdata}=require("../models/index")

let {login}=require("../models/index")


var users=async (req,res)=>{


    var data= await gettingdata();
    console.log(data);

    if(data){
        res.send(data)
    }else{

        res.send("hello ")
    }
    

}

let login_data=async (req,res)=>{
    var data= await login();
    // console.log(data);

    if(data){
        res.send(data)
    }else{

        res.send("Invalid ")
    }
}


module.exports={
    users,login_data

}