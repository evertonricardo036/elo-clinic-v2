const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patients.controller');

router.get('/patients', patientsController.getPatients);
router.post('/patients', patientsController.createPatient);
router.put('/patients/:id', patientsController.updatePatient);
router.delete('/patients/:id', patientsController.deletePatient);

module.exports = router;