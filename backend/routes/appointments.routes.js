const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointments.controller');

router.get('/appointments', appointmentsController.getAppointments);
router.post('/appointments', appointmentsController.createAppointment);
router.put('/appointments/:id', appointmentsController.updateAppointment);
router.delete('/appointments/:id', appointmentsController.deleteAppointment);

module.exports = router;