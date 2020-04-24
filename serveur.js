const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',function(req, res){
    res.render('index');
})

app.get('/citations',function(req, res){
    res.render('citations');
})

app.get('/personnages',function(req, res){
    res.render('personnages'); 
})

app.get('/contact',function(req, res){
    res.render('contact');
})

app.listen(9090, function(){
    console.log("Mon serveur écoute sur le port 9090");
})