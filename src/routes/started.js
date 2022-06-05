// Router started.js
const express = require('express');
const router = express.Router();

const startedController = require('../app/controllers/StartedController');

router.use('./started', startedController.index);
router.use('./started/:slug', startedController.installing);

module.exports = router;
