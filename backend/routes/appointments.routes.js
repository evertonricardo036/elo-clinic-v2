const express = require('express');

const router = express.Router();

const appointments = require('../data/appointments');
const clinics = require('../data/appointments');
const professionals = require('../data/clinics');
const patients = require('../data/patients');

router.get('/appointments', (req, res) => {
    res.json(appointments);
});

router.post('/appointments', (req, res) => {  
    const { clinicId, professionalId, patientId, date, status, serviceType } = req.body;

    if (!clinicId || !professionalId || !patientId || !date || !status || !serviceType) {
        return res.status(400).json({ message: 'All appointment fields are required' });
    }

    const clinicExists = clinics.find(c => c.id === clinicId);

    if (!clinicExists) {
        return res.status(404).json({ message: 'Clinic not found' });
    }

    const professionalExists = professionals.find(p => p.id === professionalId);
    
    if (!professionalExists) {
        return res.status(404).json({ message: 'Professional not found' });
    }

    const patientExists = patients.find(p => p.id === patientId);

    if (!patientExists) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    const validStatuses = ['scheduled', 'completed', 'cancelled'];

    if (!validStatuses.includes(status)) {
        return res.status(404).json({ message: 'Invalid appointment status' });
    }

    const newAppointment = {
        id: appointments.length + 1, 
        clinicId,
        professionalId,
        patientId,
        date,
        status,
        serviceType
    };

    appointments.push(newAppointment);

    res.status(201).json(newAppointment);
});

module.exports = router;