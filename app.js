var express = require('express'),
     request = require('request'),
     ejsLint = require('ejs-lint');
var app = express();
// app config
app.set("view engine", "ejs");

// home 
 app.get('/', function (req, res) {
  res.render('search')
})

//app here
 app.get('/movie', function (req, res) {
      var query = req.query.search;
      var url = "http://www.omdbapi.com/?&apikey={API Key}&s=" + query;
      request(url, function(error, response, body){
      if(!error && response.statusCode == 200){
      var mybody = JSON.parse(body);
      res.render("movie", {mybody : mybody});
     }else{
      console.log("server err");
     }
   });
});

// App listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("app listing you");
});