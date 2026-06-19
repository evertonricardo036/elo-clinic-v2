const professionalsService = require('../services/professionals.service');

function getProfessionals(req, res) {
    const result = professionalsService.getAll();
    res.json(result);
}

function createProfessional(req, res) {
    const result = professionalsService.create(req.body);
    res.status(201).json(result);
}

function updateProfessional(req, res) {
    const id = Number(req.params.id);
    const result = professionalsService.update(id, req.body);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

function deleteProfessional(req, res) {
    const id = Number(req.params.id);
    const result = professionalsService.remove(id);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

module.exports = {
    getProfessionals,
    createProfessional,
    updateProfessional,
    deleteProfessional
};