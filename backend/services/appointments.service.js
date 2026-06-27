const appointments = require('../data/appointments');
const clinics = require('../data/clinics');
const professionals = require('../data/professionals');
const patients = require('../data/patients');

const validStatuses = ['scheduled', 'completed', 'cancelled'];

function getAll() {
    return appointments;
}

function create(data) {
    const { clinicId, professionalId, patientId, date, status, serviceType } = data;

    if (!clinicId || !professionalId || !patientId || !date || !status || !serviceType) {
        return { error: true, status: 400, message: 'All appointment fields are required' };
    }

    const clinicExists = clinics.find(c => c.id === clinicId);
    if (!clinicExists) {
        return { error: true, status: 404, message: 'Clinic not found' };
    }

    const professionalExists = professionals.find(p => p.id === professionalId);
    if (!professionalExists) {
        return { error: true, status: 404, message: 'Professional not found' };
    }

    const patientExists = patients.find(p => p.id === patientId);
    if (!patientExists) {
        return { error: true, status: 404, message: 'Patient not found' };
    }

    if (!validStatuses.includes(status)) {
        return { error: true, status: 400, message: 'Invalid appointment status' };
    }

    const newAppointment = {
        id: appointments.length + 1,
        clinicId,
        professionalId,
        patientId,
        date,
        status,
        serviceType
    };

    appointments.push(newAppointment);
    return newAppointment;
}

function update(id, data) {
    const { date, status, serviceType } = data;

    const appointment = appointments.find(a => a.id === id);
    if (!appointment) {
        return { error: true, status: 404, message: 'Appointment not found' };
    }

    if (!validStatuses.includes(status)) {
        return { error: true, status: 400, message: 'Invalid appointment status' };
    }

    appointment.date = date;
    appointment.status = status;
    appointment.serviceType = serviceType;
    return appointment;
}

function remove(id) {
    const index = appointments.findIndex(a => a.id === id);
    if (index === -1) {
        return { error: true, status: 404, message: 'Appointment not found' };
    }

    appointments.splice(index, 1);
    return { message: 'Appointment deleted' };
}

module.exports = { getAll, create, update, remove };