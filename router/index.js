var express= require("express");


var {users}=require("../controllers/index")

let {login_data}=require("../controllers/index")

var router = express.Router();


// lohosost:3000/api/users. 

router.get("/users",users);

router.get("/login",login_data);

// router.get("/",users)


module.exports=router;