var express = require('express');
var router = express.router();

var hiking =[
  {id: 1, title: 'Angels Landing'},
  {id: 2, title: 'Donut Falls'},
  {id: 3, title: 'Bells Canyon'}
]
router.get('/', function(req,res){
  res.render('hiking', {hiking,hiking})
})
module.exports = router;