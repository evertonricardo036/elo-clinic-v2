const professionals = require('../data/professionals');

function getProfessionals(req, res) {
    res.json(professionals);
}

function createProfessional(req, res) {
    const { name, specialty, hourlyRate } = req.body;

    const newProfessional = {
        id: professionals.length + 1,
        name, 
        specialty,
        hourlyRate
    };

    professionals.push(newProfessional);

    res.status(201).json(newProfessional);
}

function updateProfessional(req, res) {
    const id = Number(req.params.id);

    const { name, specialty, hourlyRate } = req.body;

    const professional = professionals.find(p => p.id === id);

    if (!professional) {
        return res.status(404).json({ message: 'Professional not found' });
    }

    professional.name = name;
    professional.specialty = specialty;
    professional.hourlyRate = hourlyRate;

    res.json(professional);
}

function deleteProfessional(req, res) {
    const id = Number(req.params.id);

    const index = professionals.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Professional not found' });
    }

    professionals.splice(index, 1);

    res.json({ message: 'Professional deleted' });
}

module.exports = {
    getProfessionals,
    createProfessional,
    updateProfessional,
    deleteProfessional
};