var conn=require("../db")


var gettingdata=()=>{


return new Promise((resolve,reject)=>{

    conn.query("select * from users",(err,data)=>{

        console.log(data)
        if(err){
        reject(err)
        }
    else{
    
         resolve(data)
    }
    })
})


}


module.exports={
    gettingdata
}