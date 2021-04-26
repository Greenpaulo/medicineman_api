const express = require('express');
const { getEssences, getEssence } = require('../controllers/essences')

const router = express.Router();

router.route('/').get(getEssences);

router.route('/:id').get(getEssence);

module.exports = router;