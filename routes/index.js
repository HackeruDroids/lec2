var express = require('express');
var router = express.Router();

/* GET home page. */


var cars = [
  {
   vendor: "Renault",
   model:'Megan',
   color: 'red'
  },
  {
   vendor: "Fiat",
   model:'Punto',
   color: 'Blue'
  },
  {
   vendor: "Ford",
   model:'Mustang',
   color: 'red'
  }
];
  
  //get from database//
  var obj = {user:'tomer', arr:cars, vendors:[1, 2, 3]};


 router.get('/',indexPage);

 
 function indexPage(req, res) {
    res.render('index',obj);
 }

 router.get('/tomer',tomerPage);

 function tomerPage(req, res) {
    res.render('tomer', {title: "Express" });
 }
 

module.exports = router;
