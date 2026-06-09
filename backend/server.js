const express = require('express');

const clinicsRoutes = require('./routes/clinics.routes');
const professionalsRoutes = require('./routes/professionals.routes');
const patientsRoutes = require('./routes/patients.routes');
const appointmentsRoutes = require('./routes/appointments.routes');

const requestLogger = require('./middlewares/requestLogger');
const validateName = require('./middlewares/validateName');


const app = express();
const PORT = 3000;

app.use(express.json());

app.use(requestLogger);
app.use(validateName);

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






