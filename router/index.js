var express= require("express");


var {users}=require("../controllers/index")
var router = express.Router();


// lohosost:3000/api/users. 

router.get("/users",users);

router.get("/fb",users);

// router.get("/",users)


module.exports=router;