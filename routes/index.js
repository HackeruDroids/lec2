var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { firstName:"Tomer", phone:"0507123012" });
});


//Tomer
router.get('/tomer', function(req, res, next) {
  res.render('tomer', { title: 'Express' });
});

module.exports = router;
