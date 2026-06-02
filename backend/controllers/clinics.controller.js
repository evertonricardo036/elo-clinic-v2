const clinics = require('../data/clinics');

function getClinics(req, res) {
    res.json(clinics);
}

function createClinic(req, res) {
    const { name, cnpj } = req.body;

    const newClinic = {
        id: clinics.length + 1,
        name,
        cnpj
    };

    clinics.push(newClinic);

    res.status(201).json(newClinic);
}

module.exports = {
    getClinics,
    createClinic
};