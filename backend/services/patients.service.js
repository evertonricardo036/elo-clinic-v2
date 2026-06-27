const patients = require('../data/patients');

function getAll() {
    return patients;
}

function create(data) {
    const { name, cpf } = data;

    const duplicate = patients.find(p => p.cpf === cpf);
    if (duplicate) {
        return { error: true, status: 400, message: 'CPF already exists' };
    }

    const newPatient = {
        id: patients.length + 1,
        name,
        cpf
    };

    patients.push(newPatient);
    return newPatient;
}

function update(id, data) {
    const { name, cpf } = data;

    const patient = patients.find(p => p.id === id);
    if (!patient) {
        return { error: true, status: 404, message: 'Patient not found' };
    }

    const duplicate = patients.find(p => p.cpf === cpf && p.id !== id);
    if (duplicate) {
        return { error: true, status: 400, message: 'CPF already exists' };
    }

    patient.name = name;
    patient.cpf = cpf;
    return patient;
}

function remove(id) {
    const index = patients.findIndex(p => p.id === id);
    if (index === - 1) {
        return { error: true, status: 404,message: 'Patient not found' };
    }

    patients.splice(index, 1);
    return { message: 'Patient deleted' };
}

module.exports = { getAll, create, update, remove };