const professionals = require('../data/professionals');

function getAll() {
    return professionals;
}

function create(data) {
    const { name, specialty, hourlyRate } = data

    const newProfessional = {
        id: professionals.length + 1,
        name,
        specialty,
        hourlyRate
    };

    professionals.push(newProfessional);
    return newProfessional;
}

function update(id, data) {
    const { name, specialty, hourlyRate } = data;

    const professional = professionals.find(p => p.id === id);
    if (!professional) {
        return { error: true, status: 404, message: 'Professional not found'};
    }

    professional.name = name;
    professional.specialty = specialty;
    professional.hourlyRate = hourlyRate;
    return professional;
}

function remove(id) {
    const index = professionals.findIndex(p => p.id === id);
    if (index === -1) {
        return { error: true, status: 404, message: 'Professioanl not found' };
    }

    professionals.splice(index, 1);
    return { message: 'Professional deleted' };
}

module.exports = {getAll, create, update, remove };