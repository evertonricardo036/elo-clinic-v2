const appointmentsService = require('../services/appointments.service');

function getAppointments(req, res) {
    const result = appointmentsService.getAll();
    res.json(result);
}

function createAppointment(req, res) {
    const result = appointmentsService.create(req.body);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.status(201).json(result);
}

function updateAppointment(req, res) {
    const id = Number(req.params.id);
    const result = appointmentsService.update(id, req.body);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

function deleteAppointment(req, res) {
    const id = Number(req.params.id);
    const result = appointmentsService.remove(id);
    if (result.error) {
        return res.status(result.status).json({ message: result.message });
    }
    res.json(result);
}

module.exports = {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
};