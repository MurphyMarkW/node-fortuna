var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Fortuna - Your daily coffee fortunes!', fortune: 'FORTUNE GO HERE' });
});

module.exports = router;
