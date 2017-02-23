var express = require('express');

var router = new express.Router();

var moment = require('moment');

router.use(function (req, res, next) {
  console.log("Running the Express Router.");
  next();
});

router.route('/')
  .get(function (req, res) {
    res.render('index', {name: "Tyler", date: date.format("MMM Do YYYY"),
                      time: date.format("hh:mm:ss A")});
});

module.exports = router;
