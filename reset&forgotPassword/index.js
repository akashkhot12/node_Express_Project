const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Simulated database of users
const users = [
    { id: 1, email: 'user@example.com', password: 'hashedpassword123', resetToken: null }
];

// Route to request a password reset
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(404).send('User not found');
    }

    // Generate a random token
    const token = crypto.randomBytes(20).toString('hex');
    user.resetToken = token;

    // Send reset email with token
    // Code to send email goes here

    res.send('Password reset email sent');
});

// Route to handle password reset
app.get('/reset-password/:token', (req, res) => {
    const token = req.params.token;
    const user = users.find(user => user.resetToken === token);

    if (!user) {
        return res.status(404).send('Invalid or expired token');
    }

    // Display password reset form
    res.send(`
        <form action="/reset-password" method="post">
            <input type="hidden" name="token" value="${token}">
            <input type="password" name="password" placeholder="Enter new password">
            <button type="submit">Reset Password</button>
        </form>
    `);
});

// Route to handle password reset form submission
app.post('/reset-password', (req, res) => {
    const { token, password } = req.body;
    const user = users.find(user => user.resetToken === token);

    if (!user) {
        return res.status(404).send('Invalid or expired token');
    }

    // Update user's password
    user.password = password;
    user.resetToken = null;

    res.send('Password reset successful');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
