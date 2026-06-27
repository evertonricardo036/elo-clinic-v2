const patientsService = require('../services/patients.service');

function getPatients(req, res) {
    const result = patientsService.getAll();
    res.json(result)
}

function createPatient(req, res) {
    const result = patientsService.create(req.body);

    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.status(201).json(result);
}

function updatePatient(req, res) {
    const id = Number(req.params.id);
    const result = patientsService.update(id, req.body);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

function deletePatient(req, res) {
    const id = Number(req.params.id);
    const result = patientsService.remove(id);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

module.exports = {
    getPatients,
    createPatient,
    updatePatient,
    deletePatient
};