const express = require('express');
const { getDrugs } = require('../controllers/drugController');
const router = express.Router();

router.get('/', getDrugs);

module.exports = router;
