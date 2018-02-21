var express = require('express');
var router = express.Router();

var hike =[
  {id: 1, title: 'Angels Landing'},
  {id: 2, title: 'Donut Falls'},
  {id: 3, title: 'Bells Canyon'}
]

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
