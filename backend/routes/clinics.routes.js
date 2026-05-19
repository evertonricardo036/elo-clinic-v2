const express = require('express');

const router = express.Router();

const clinics = require('../data/clinics');

router.get('/clinics', (req, res) => {
    res.json(clinics);
});

router.post('/clinics', (req, res) => {
    const {name, cnpj } = req.body;

    const newClinic = {
        id: clinics.length + 1,
        name,
        cnpj
    };
    
    clinics.push(newClinic);

    res.status(201).json(newClinic);
});

module.exports = router;

