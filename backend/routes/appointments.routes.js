const express = require('express');

const router = express.Router();

const appointments = require('../data/appointments');

router.get('/appointments', (req, res) => {
    res.json(appointments);
});

module.exports = router;