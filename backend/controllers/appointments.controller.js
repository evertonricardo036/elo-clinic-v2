const appointments = require('../data/appointments');

const validStatuses = ['scheduled', 'completed', 'cancelled'];

function getAppointments(req, res) {
    res.json(appointments);
}

function createAppointment(req, res) {
    const { patientId, professionalId, date, status } = req.body;

    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }

    const newAppointment = {
        id: appointments.length + 1,
        patientId,
        professionalId,
        date,
        status
    };

    appointments.push(newAppointment);
    res.status(201).json(newAppointment);
}

function updateAppointment(req, res) {
    const id = Number(req.params.id);
    const { patientId, professionalId, date, status } = req.body;

    const appointment = appointments.find(a => a.id === id);

    if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
    }

    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }

    appointment.patientId = patientId;
    appointment.professionalId = professionalId;
    appointment.date = date;
    appointment.status = status;

    res.json(appointment);
}

function deleteAppointment(req, res) {
    const id = Number(req.params.id);

    const index = appointments.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Appointment not found' });
    }

    appointments.splice(index, 1);

    res.json({ message: 'Appointment deleted' });
}

module.exports = {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
};