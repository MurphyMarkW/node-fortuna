var exec = require('child_process').exec;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  exec('fortune -o -s', function(error, stdout, stderr) {
    res.render('index', { title: 'Fortuna - Your daily coffee fortunes!', fortune: stdout });
  });
});

module.exports = router;
