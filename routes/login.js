const express=require('express');

const router=express.Router();
router.get('/login',(req,res,next)=>{
	res.send('<html><body><form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/" method="POST"><input id="username" type="text" name="name"><button type="submit">Login</button></form></body></html>');
});
router.post('/',(req,res,next)=>{
	res.redirect('/message');
})


module.exports=router;