const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const clinics = [
    {
        id: 1, 
        name: 'Clínica Exemplo',
        cnpj: '00.000.000/0001-00'
    }
];

app.get('/', (req, res) => {
    res.send('Elo clinic API is running');
});

app.get('/clinics', (req, res) => {
    res.json(clinics);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});