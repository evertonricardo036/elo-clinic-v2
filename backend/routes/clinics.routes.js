const express = require('express');

const router = express.Router();

const clinics = require('../data/clinics');

const clinicsController = require('../controllers/clinics.controller');

router.post('/clinics', clinicsController.createClinic);

router.get('/clinics', clinicsController.getClinics);

router.put('/clinics/:id', clinicsController.updateClinic);

router.delete('/clinics/:id', clinicsController.deleteClinic);

module.exports = router;

