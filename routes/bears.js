var express = require('express');

var router = new express.Router();

var moment = require('moment');

router.use(function (req, res, next) {
  console.log("Running the Express Router.");
  next();
  });

  router.route('/bears')
    .get(function (req, res) {
      bear.find(function(err, bearData) {
        if (err) {
          console.log(err, "ERROR IN BEAR")
        } else {
          res.json(bearData);
        }
      });
    })
  .post(function (req, res) {
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

  router.route('/bears/:bear_id')
    .get(function (req, res) {
      Bear.findById(req.params.bear_id, function(err, bearData) {
        if(err){
          console.log(err, "Error with one specific Bear");
        }else{
          res.json(bearData);
        }
      });
    })
    .delete(function (req, res) {
      Bear.remove({_id: req.params.bear_id}, function(err, b) {
        if(err){
          console.log(err, "Could Not Delete Bear");
        } else {
          res.json({message: "Bear Deleted"});
        }
      });
    })
    .put(function(req, res) {
      Bear.findById( req.params.bear_id, function(err, bear) {
        if(err){
          console.log(err)
        } else {

          bear.age = req.body.age ? req.body.age : bear.age;
          bear.species = req.body.species ? req.body.species : bear.species;
          bear.attitude = req.body.attitude ? req.body.attitude : bear.attitude;
          bear.color = req.body.color ? req.body.color : bear.color;
          bear.weight = req.body.weight ? req.body.weight : bear.weight;
          bear.location = req.body.location ? req.body.location : bear.location;
          bear.name = req.body.name ? req.body.name : bear.name;

          bear.save(function(e, updatedBear){
            if(e){
              console.log(e, "ERROR UPDATING BEAR");
            } else {
              res.json(updatedBear);
            }
          });
        }
      });
    });

module.exports = router;
