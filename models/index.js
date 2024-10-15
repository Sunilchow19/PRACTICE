var conn=require("../db")


var gettingdata=()=>{


return new Promise((resolve,reject)=>{

    conn.query("select * from register",(err,data)=>{

        // console.log(data)
        if(err){
        reject(err)
        }
    else{
    
         resolve(data)
    }
    })
})


}


let login=()=>{

    return new Promise ((resolve,reject)=>{
        // let data={
        //     ...req.body
        //  }
        conn.query("select * from register",(err,data)=>{

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
    gettingdata,
    login
}