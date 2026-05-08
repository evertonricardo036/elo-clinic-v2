const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const clinics = [
    {
        id: 1, 
        name: 'Clinica Exemplo',
        cnpj: '00.000.000/0001-00'
    }
];

app.get('/', (req, res) => {
    res.send('Elo clinic API is running');
});

app.get('/clinics', (req, res) => {
    res.json(clinics);
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

const professionals = [
    {
        id: 1,
        name: "Everton",
        specialty: "AT",
        hourlyRate: 70
  }
];

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

const patients = [
    {
       id: 1,
       name: "Paciente 1",
       age: 9,
       diagnosis: "TEA"
    }
];

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

const appointments = [
    {
        id: 1,
        clinicId: 1,
        patientId: 1,
        date: "2026-05-09",
        status: "scheduled",
        serviceType: "Plano de Saúde"
    }
];

app.get('appointmetns', (req, res) => {
    res.json(appointments);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






