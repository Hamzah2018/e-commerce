var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('home', { title: 'E-Commerce' });
  });
  
  module.exports = router;