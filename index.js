var express = require('express')
var app = express()

// app config
app.set("view engine", "ejs");

// home 
app.get('/', function(req, res){
  res.render('home')
});

// about 
app.get('/about', function(req, res){
  res.render('about')
});

// App listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("app listing you");
});