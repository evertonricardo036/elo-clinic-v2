const express = require('express');

const router = express.Router();

const clinics = require('../data/clinics');

const clinicsController = require('../controllers/clinics.controller');

router.post('/clinics', clinicsController.createClinic);

router.get('/clinics', clinicsController.getClinics);

router.put('/clinics/:id', (req, res) => {
    const id = Number(req.params.id);

    const { name, cnpj } = req.body;

    const clinic = clinics.find(c => c.id === id);

    if (!clinic) {
        return res.status(404).json({ message: 'Clinic not found' });
    }

    clinic.name = name;
    clinic.cnpj = cnpj;

    res.json(clinic);
});

router.delete('/clinics/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = clinics.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Clinic not found' });
    }

    clinics.splice(index, 1);

    res.json({ message: 'Clinic deleted' });
});

module.exports = router;

