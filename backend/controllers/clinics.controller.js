const clinicsService = require('../services/clinics.service');

function getClinics(req, res) {
    const result = clinicsService.getAll();
    res.json(result);
}

function createClinic(req, res) {
    const result = clinicsService.create(req.body);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.status(201).json(result);
}

function updateClinic(req, res) {
    const id = Number(req.params.id);
    const result = clinicsService.update(id, req.body);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

function deleteClinic(req, res) {
    const id = Number(req.params.id);
    const result = clinicsService.remove(id);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

module.exports = {
    getClinics,
    createClinic,
    updateClinic,
    deleteClinic
};