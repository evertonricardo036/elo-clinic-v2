const express = require('express');

const router = express.Router();

const professionals = require('../data/professionals');

router.get('/professionals', (req, res) => {
    res.json(professionals);
});

router.post('/professionals', (req, res) => {
    const { name, specialty, hourlyRate } = req.body;

    const newProfessional = {
        id: professionals.length + 1,
        name,
        specialty,
        hourlyRate
    };

    professionals.push(newProfessional);

    res.status(201).json(newProfessional);
});

module.exports = router;
