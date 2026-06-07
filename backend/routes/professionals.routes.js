const express = require('express');

const router = express.Router();

const professionals = require('../data/professionals');

const professionalsController = require('../controllers/professionals.controller');

router.get('/professionals', professionalsController.getProfessionals);

router.post('/professionals', professionalsController.createProfessional);

router.put('/professionals/:id', professionalsController.updateProfessional);

router.delete('/professionals/:id', professionalsController.deleteProfessional);

module.exports = router;

