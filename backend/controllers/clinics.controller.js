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

function updateClinic(req, res) {
    const id = Number(req.params.id);

    const { name, cnpj } = req.body;

    const clinic = clinics.find(c => c.id === id);

    if (!clinic) {
        return res.status(404).json({ message: ' Clinic not found' });
    }

    clinic.name = name;
    clinic.cnpj = cnpj;

    res.json(clinic);
}

module.exports = {
    getClinics,
    createClinic,
    updateClinic
};