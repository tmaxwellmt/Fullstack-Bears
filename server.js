var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/fullstack-bears");

app.get ('/api/bears', function(req, res){
  res.json({message:"You found the bears"})
});

app.listen(3000, function(){
  console.log("Express application fired up on port 3000")
});
