const express = require('express');

const router = express.Router();

const clinics = require('../data/clinics');

const clinicsController = require('../controllers/clinics.controller');

router.post('/clinics', clinicsController.createClinic);

router.get('/clinics', clinicsController.getClinics);

router.put('/clinics/:id', clinicsController.updateClinic);

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

