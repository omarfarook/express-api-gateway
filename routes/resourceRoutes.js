const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

router.get('/', resourceController.get);

router.post('/', resourceController.create);

module.exports = router;
