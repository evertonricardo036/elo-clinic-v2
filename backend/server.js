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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
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


