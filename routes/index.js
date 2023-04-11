var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Cliente', function(req, res, next) {
  res.render('Cliente', { title: 'Express' });
});

router.get('/Productos', function(req, res, next) {
  res.render('Productos', { title: 'Express' });
});

module.exports = router;
