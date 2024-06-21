const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',      // Replace with your MySQL host
  user: 'root',           // Replace with your MySQL username
  password: 'Akash3975',   // Replace with your MySQL password
  database: 'node-mysql' // Replace with your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Example query
connection.query('SELECT * FROM table_name', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error.stack);
    return;
  }
  console.log('Results:', results);
});

// Close the connection
connection.end((err) => {
  if (err) {
    console.error('Error ending the connection:', err.stack);
    return;
  }
  console.log('Connection closed');
});
