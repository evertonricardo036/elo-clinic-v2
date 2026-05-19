const express = require('express');

const router = express.Router();

const professionals = require('../data/professionals');

router.get('/professionals', (req, res) => {
    res.json(professionals);
});

module.exports = router;
