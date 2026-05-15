const express = require('express');

const clinics = require('./data/clinics');

const professionals = require('./data/professionals');

const patients = require('./data/patients');

const appointments = require('./data/appointments');

const clinicsRoutes = require('./routes/clinics.routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(clinicsRoutes);

app.get('/', (req, res) => {
    res.send('Elo clinic API is running');
});

app.post('/clinics', (req, res) => {
    const { name, cnpj } = req.body

    const newClinic = {
        id: clinics.length + 1,
        name,
        cnpj
    };

    clinics.push(newClinic);

    res.status(201).json(newClinic);
});

app.put('/clinics/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, cnpj } = req.body;

    const clinic = clinics.find(c => c.id === id);

if (!clinic) {
    return res.status(404).json({ message: 'Clinic not found'});
}

clinic.name = name;
clinic.cnpj = cnpj;

res.json(clinic);
});

app.delete('/clinics/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = clinics.findIndex(c => c.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Clinic not found' });

    }

    clinics.splice(index, 1);

    res.json({ message: 'Clinic deleted' });
});

app.get('/professionals', (req, res) => {
    res.json(professionals);
});

app.post('/professionals', (req, res) => {
  const { name, specialty, hourlyRate } = req.body;
  
  const newProfessional = {
    id: professionals.length + 1,
    name,
    specialty,
    hourlyRate
  };

  professionals.push(newProfessional);

  res.status(201).json(newProfessional);
});

app.put('/professionals/:id', (req, res) => {
    const id = Number(req.params.id);
    
    const { name, specialty, hourlyRate } = req.body;
   
    const professional = professionals.find(p => p.id === id);
    
    if (!professional) {
        return res.status(404).json({ message: 'Professional not found'});
    }

    professional.name = name;
    professional.specialty = specialty;
    professional.hourlyRate = hourlyRate;

    res.json(professional)
}); 

app.delete('/professionals/:id', (req, res) => {
    const id = Number(req.params.id);
    
    const index = professionals.findIndex(p => p.id === id);

        if (index === -1) {
        return res.status(404).json({ message: 'Professional not found'});
    } 

    professionals.splice(index, 1);

    res.json({ message: 'Professional deleted'});
});

app.get('/patients', (req, res) => {
    res.json(patients);
});

app.post('/patients', (req, res) => {
    const { name, age, diagnosis } = req.body;

    const newPatient =  {
        id: patients.length + 1,
        name,
        age,
        diagnosis
    };

    patients.push(newPatient);

    res.status(201).json(newPatient);
});

app.put('/patients/:id', (req, res) => {
    const id = Number(req.params.id);

    const { name, age, diagnosis } = req.body;

    const patient = patients.find(p => p.id === id);

    if (!patient) {
        return res.status(404).json({ message: 'Patient not found'});
    }

    patient.name = name;
    patient.age = age;
    patient.diagnosis = diagnosis;

    res.json(patient);
});

app.delete('/patients/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = patients.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Patient not found'});
    }

    patients.splice(index, 1);

    res.json({ message: 'Patient deleted' });
});

app.get('/appointments', (req, res) => {
    res.json(appointments);
});

app.post('/appointments', (req, res) => {
    const { clinicId, professionalId, patientId, date, status, serviceType } = req.body;

    if (!clinicId || !professionalId || !patientId || !date || !status || !serviceType) {
        return res.status(400).json({ message: 'All appointment fields are required'});
    }

    const clinicExists = clinics.find(c => c.id === clinicId);

    if (!clinicExists) {
        return res.status(400).json({ message: 'Clinic not found' });
    }

    const professionalExists = professionals.find(p => p.id === professionalId);

    if (!professionalExists) {
        return res.status(404).json({ message: 'Professional not found' });
    }

    const patientExists = patients.find(p => p.id === patientId);

    if (!patientExists) {
        return res.status(404).json({ message: 'Patient not found' });
    }

    const validStatuses = ['scheduled', 'completed', 'cancelled'];

    if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid appointment status' });
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

    res.status(201).json(newAppointment);
});

app.put('/appointments/:id', (req, res) => {
    const id = Number(req.params.id);

    const { clinicId, professionalId, patientId, date, status, serviceType } = req.body;

    const appointment = appointments.find(a => a.id === id);

    if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
    }

    appointment.clinicId = clinicId;
    appointment.professionalId = professionalId;
    appointment.patientId = patientId;
    appointment.date = date;
    appointment.status = status;
    appointment.serviceType = serviceType;

    res.json(appointment);
});

app.delete('/appointments/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = appointments.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Appointment not found' });
    }
    
    appointments.splice(index, 1);

    res.json({ message: 'Appointment deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






