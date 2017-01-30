var express = require('express');
var app = express();

app.get ('/api/greeting', function(req,res){
  res.send("Happy Monday");
});
app.get(/api/happy',function(req,res) {
  res.send("Happy");

app.listen(3000, function(){
  console.log("Express application fired up on port 3000")
});
