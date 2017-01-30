var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Bear = require('./models/bear');

var bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost/fullstack-bears");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/api/bears', function(req, res){
  Bear.find(function(err, bearData) {
    if (err) {
      console.log(err, "ERROR IN BEAR")
    } else {
      res.json(bearData);
    }
  })
});

app.post('/api/bears', function(req, res){

  var bear = new Bear({
    age: req.body.age,
    species: req.body.species,
    name: req.body.name,
    weight: req.body.weight,
    location: req.body.location,
    attitude: req.body.attitude,
  });

  bear.save(function(err, bearData){
    if(err){
      console.log(err, "Error with your bearer");
    } else {
      res.json(bearData)
    }
  });
});


app.listen(3000, function(){
  console.log("Express application fired up on port 3000")
});
