const patients = require('../data/patients');

function getPatients(req, res) {
    res.json(patients);
}

function createPatient(req, res) {
    const { name, cpf } = req.body;

    const duplicate = patients.find(p => p.cpf === cpf);

    if (duplicate) {
        return res.status(400).json({ message: 'CPF already exists' });
    }

    const newPatient = {
        id: patients.length + 1,
        name,
        cpf
    };

    patients.push(newPatient);
    res.status(201).json(newPatient);
}

function updatePatient(req, res) {
    const id = Number(req.params.id);
    const { name, cpf } = req.body;

    const patient = patients.find(p => p.id === id);

    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    const duplicate = patients.find(p => p.cpf === cpf && p.id !== id);

    if (duplicate) {
        return res.status(400).json({ message: 'CPF already exists' });
    }

    patient.name = name;
    patient.cpf = cpf;

    res.json(patient);
}

function deletePatient(req, res) {
    const id = Number(req.params.id);

    const index = patients.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    patients.splice(index, 1);

    res.json({ message: 'Patient deleted' });
}

module.exports = {
    getPatients,
    createPatient,
    updatePatient,
    deletePatient
};