const express = require('express');

const clinics = require('./data/clinics');
const professionals = require('./data/professionals');
const patients = require('./data/patients');
const appointments = require('./data/appointments');

const clinicsRoutes = require('./routes/clinics.routes');
const professionalsRoutes = require('./routes/professionals.routes');
const patientsRoutes = require('./routes/patients.routes');
const appointmentsRoutes = require('./routes/appointments.routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(clinicsRoutes);
app.use(professionalsRoutes);
app.use(patientsRoutes);
app.use(appointmentsRoutes);

app.get('/', (req, res) => {
    res.send('Elo clinic API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






