const fs=require('fs');

const express=require('express');

const router=express.Router();


router.get('/message',(req,res,next)=>{	
	fs.readFile('msg.txt',(err,data)=>{
		if(err){
			console.log(err)
			data='No Chat Exist'
		}
		res.send(`<html><body>${data}<form action="/data" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="message"><input id="username" type="hidden" name="username"><button type="submit">Send</button></form></body></html>`);
	})
})
router.post('/data',(req,res,next)=>{
	fs.writeFile("msg.txt",`${req.body.username}:${req.body.message} `,{flag:'a'},(err)=>{
		if(err)console.log(err);
		res.redirect('/message');
	})
})

module.exports=router;