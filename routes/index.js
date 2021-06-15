var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});


router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/intern/php/laravel', function(req, res, next) {
  res.send("sure laravel");
});
router.get('/master', function(req, res, next) {
  res.render('master');
});

router.get('/myform', function(req, res, next) {
  res.render('form');
});
router.post('/form-process', function(req, res, next) {
  var a=req.body.txt1;
  var b=req.body.txt2;
  console.log(req.body);
  console.log("Name is:" + a + "B value: " +b);
  res.render('ans',{mya:a,myb:b});
});



module.exports = router;
