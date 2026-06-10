const clinics = require('../data/clinics');

function getAll() {
    return clinics;
}

function create(data) {
    const { name, cnpj } = data;

    const duplicate = clinics.find(c => c.cnpj === cnpj);
    if (duplicate) {
        return { error: true, status: 400, message: 'CNPJ already exists' };
    }

    const newClinic = {
        id: clinics.length + 1,
        name,
        cnpj
    };

    clinics.push(newClinic);
    return newClinic;
}

function update(id, data) {
    const { name, cnpj } = data;

    const clinic = clinics.find(c => c.id === id);
    if (!clinic) {
        return { error: true, status: 404, message: 'Clinic not found' };
    }

    const duplicate = clinics.find(c => c.cnpj === cnpj && c.id !== id);
    if (duplicate) {
        return { error: true, status: 400, message: 'CNPJ already exists' };
    }

    clinic.name = name;
    clinic.cnpj = cnpj;
    return clinic;
}

function remove(id) {
    const index = clinics.findIndex(c => c.id === id);
    if (index === -1) {
        return { error: true, status: 404, message: 'Clinic not found' };
    }

    clinics.splice(index, 1);
    return { message: 'Clinic deleted' };
}

module.exports = { getAll, create, update, remove };