const express = require('express');
const app = express();

app.set('view engine','ejs')

app.use(express.static('views'))

app.get('/',(req,res)=> {res.render('home')});
app.get('/home',(req,res)=> {res.render('home')});

app.get('/aboutme',(req,res)=>{res.render('aboutme')})

const port = 5000;
app.listen(port,()=>console.log('Applicaiton is running in 5000 port')
    ); 
