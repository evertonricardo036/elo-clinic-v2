const clinics = require('../data/clinics');

function getClinics(req, res) {
    res.json(clinics);
}

module.exports = {
    getClinics
};