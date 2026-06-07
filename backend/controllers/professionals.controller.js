const professionals = require('../data/professionals');

function getProfessionals(req, res) {
    res.json(professionals);
}

module.exports = {
    getProfessionals
};