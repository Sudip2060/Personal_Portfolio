//Import the Express Js library and create an Express Application
const express = require('express');
const app = express();

//Set the engine view to Embedded Javascript for rendering dynamic views
app.set('view engine','ejs')

//Serve static files such as Css and Img from the 'Public' Directory
app.use(express.static('public'))


//Defining routes for different pages of the web application
app.get('/',(req,res)=> {res.render('home')});
app.get('/home',(req,res)=> {res.render('home')});
app.get('/Projects',(req,res)=>{res.render('Projects')});
app.get('/aboutme',(req,res)=>{res.render('aboutme')})
app.get('/contact',(req,res)=>{res.render('Contact')})

//Assigning Port number as 5000 for the express application to listen on
const port = 5000;

//start the express application and listen on the assigned port
app.listen(port,()=>console.log('Applicaiton is running in 5000 port: http://localhost:5000/')
    ); 
