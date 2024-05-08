import React, { useState } from 'react';

function ModifyEmployeePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [employeeId, setEmployeeId] = useState(''); // Define employeeId state

  const handleModifyEmployee = () => {
    // Implement update functionality
    // Example fetch request
    fetch('http://localhost:5000/modifyEmployee', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: employeeId, name, email, department }) // Use employeeId
    })
      .then(response => {
        if (response.ok) {
          console.log('Employee updated successfully');
          // Handle success
        } else {
          console.error('Error updating employee');
          // Handle error
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Modify Employee</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Add similar input fields for email and department */}
        <button type="button" onClick={handleModifyEmployee}>Modify Employee</button>
      </form>
    </div>
  );
}

export default ModifyEmployeePage;
