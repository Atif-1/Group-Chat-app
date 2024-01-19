
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));


const loginRoutes=require('./routes/login.js');
const msgRoutes=require('./routes/message.js');

app.use(loginRoutes);
app.use(msgRoutes);

app.listen(3000);



