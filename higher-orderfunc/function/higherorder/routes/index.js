var router = require('express').Router();

var users = require('./user');
var members = require('./members');


router.get('/', function (req, res){

  res.status(200).send('Welcome to Shamazon - the best site for buying all the things');
});


router.use('users', users);
router.use('/members', members);






module.exports = router;
