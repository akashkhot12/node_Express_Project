const {Pool} = require('mysql')

const singUp = async (req, res) => {
    const { Firstname, lastname, username, password, email, phone, } = req.body;
    try {
        qr = `INSERT INTO UserDetails (FirstName, LastName, Username, Password, Email, Phone)
VALUES ('John', 'Doe', 'johndoe', 'hashed_password_here', 'johndoe@example.com', '123-456-7890')`;

        const user = await user
    } catch (error) {
        
    }
}