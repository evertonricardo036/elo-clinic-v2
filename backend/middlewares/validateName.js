function validateName(req, res, next) {
    const rotasComName = ['/clinics', '/professionals', '/patients'];

    const rotaTemName = rotasComName.some(rota => req.path.startsWith(rota));

    if (req.method === 'POST' && rotaTemName && !req.body.name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    next();
}

module.exports = validateName;