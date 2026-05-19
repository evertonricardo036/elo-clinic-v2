const express = require('express');

const router = express.Router();

const patients = require('../data/patients');

router.get('/patients', (req, res) => {
    res.json(patients);
});

module.exports = router;
