function validateName(req, res, next) {
    if (req.method === 'POST' && !req.body.name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    next();

}

module.exports = validateName;



