// Routes news.js

var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/thoitiet', newsController.thoitiet);
router.use('/thoisu', newsController.thoisu);
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
