const express = require('express');
const app = express();

app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/',(req,res)=> {res.render('home')});
app.get('/home',(req,res)=> {res.render('home')});
app.get('/Projects',(req,res)=>{res.render('Projects')});
app.get('/aboutme',(req,res)=>{res.render('aboutme')})
app.get('/contact',(req,res)=>{res.render('Contact')})

const port = 5000;
app.listen(port,()=>console.log('Applicaiton is running in 5000 port: http://localhost:5000/')
    ); 