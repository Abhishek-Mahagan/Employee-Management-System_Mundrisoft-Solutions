const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mundrosoft'
});

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
  connection.release();
});

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to add an employee
app.post('/api/employees', (req, res) => {
  const { name, email, department } = req.body;
  const sql = 'INSERT INTO employees (name, email, department) VALUES (?, ?, ?)';
  pool.query(sql, [name, email, department], (err, result) => {
    if (err) {
      console.error('Error adding employee:', err);
      res.status(500).send('Error adding employee');
      return;
    }
    console.log('Employee added successfully');
    res.status(201).send('Employee added successfully');
  });
});

// Other CRUD endpoints can be defined similarly

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
