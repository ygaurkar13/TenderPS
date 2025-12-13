const express=require("express");
const verifyToken=require("../middlewares/authMiddleware");
const authorizeRoles=require("../middlewares/roleMiddleware")
const router=express.Router();

//admin can access
router.get("/admin",verifyToken,authorizeRoles("admin"),(req,res)=>{
    res.json({message:"Welcome Admin"});
});
//only coordinator can access
router.get("/coordinator",verifyToken,authorizeRoles("coordinator"),(req,res)=>{
    res.json({message:"Welcome Coordinator"});
});
//only registrar  can access
router.get("/registrar",verifyToken,authorizeRoles("registrar"),(req,res)=>{
    res.json({message:"Welcome Registrar"});
});
//dean can access
router.get("/dean",verifyToken,authorizeRoles("dean"),(req,res)=>{
    res.json({message:"Welcome Dean"});
});
//director can access
router.get("/director",verifyToken,authorizeRoles("director"),(req,res)=>{
    res.json({message:"Welcome Director"});
});
module.exports=router;