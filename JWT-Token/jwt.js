const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

// Example payload
const payload = {
    userId: user.id,
    role: user.role
};

// Generate JWT
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

const token = req.headers.authorization.split(' ')[1];

jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        // Handle invalid token
        return res.status(401).json({ message: 'Invalid token' });
    } else {
        // Token is valid, extract payload
        req.user = decoded;
        next(); // Move to next middleware
    }
});
