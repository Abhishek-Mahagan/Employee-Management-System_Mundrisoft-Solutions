import React, { useState } from 'react';
import './AddEmployeePage.css'; // Import CSS file for styling

function AddEmployeePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');

  const handleAddEmployee = () => {
    // Perform validation and save employee information to the database
    // Example fetch request
    fetch('http://localhost:5000/addEmployee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, department })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="add-employee-container">
      <h2>Add Employee</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" name="department" required onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <button type="button" onClick={handleAddEmployee}>Add Employee</button>
      </form>
    </div>
  );
}




export default AddEmployeePage;
