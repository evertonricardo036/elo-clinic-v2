const express = require('express');

const router = express.Router();

const clinics = require('../data/clinics');

router.get('/clinics', (req, res) => {
    res.json(clinics);
});

module.exports = router;