var express = require('express');
var controllers = require('./controllers');

var router = express.Router();

router.get('/', controllers.getCat);

module.exports = router;