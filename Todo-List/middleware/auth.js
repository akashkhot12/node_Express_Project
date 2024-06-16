const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { getDb } = require('../config');

const JWT_SECRET = 'your_jwt_secret';

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const db = getDb();
        const user = await db.collection('users').findOne({ _id: ObjectId(decoded.id) });
        if (!user) return res.status(401).send({ message: 'Unauthorized' });

        req.user = { id: user._id };
        next();
    } catch (error) {
        res.status(401).send({ message: 'Unauthorized' });
    }
};

module.exports = authMiddleware;
