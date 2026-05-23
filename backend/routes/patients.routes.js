const express = require('express');

const router = express.Router();

const patients = require('../data/patients');

router.get('/patients', (req, res) => {
    res.json(patients);
});

router.post('/patients', (req, res) => {
    const {name, age, diagnosis } = req.body;

    const newPatient = {
        id: patients.length + 1,
        name,
        age,
        diagnosis
    };

    patients.push(newPatient);

    res.status(201).json(newPatient);
});

router.put('/patients/:id', (req, res) => {
    const id = Number(req.params.id);

    const { name, age, diagnosis } = req.body;

    const patient = patients.find(p => p.id === id);

    if(!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    patient.name = name;
    patient.age = age;
    patient.diagnosis = diagnosis;

    res.json(patient);
});

router.delete('/patients/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = patients.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    patients.splice(index,1);

    res.json({ message: 'Patient deleted' });
});


module.exports = router;
