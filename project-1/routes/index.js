var express = require('express');
var router = express.Router();
var index = require('../controllers/index-controller');
/* GET home page. */
router.get('/', index.sayHello);
router.post('/confirm', index.sayGoodbye);

module.exports = router;
