const express=require('express');
const app=express();
const path=require("path");
const hbs=require('hbs');
// const fetch = require("node-fetch");

const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));

const views_path=path.join(__dirname,"../template/views");
app.set('view engine','hbs');
app.set('views',views_path);

const partials_path=path.join(__dirname,"../template/partials");

hbs.registerPartials(partials_path);


app.get("/",function(req,res){
     res.render('home')    
    
});

app.get("/home",(req,res)=>{
    res.render('home');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/",(req,res)=>{
    res.send("h");
})

app.get("/wt",(req,res)=>{
    city:"th";
    res.render('wt');
    
})

app.listen(80)