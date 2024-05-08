import React, { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        if (response.ok) {
          // Successful login, manage session
          sessionStorage.setItem('isLoggedIn', true);
          // Redirect or perform other actions as needed
          console.log('Login successful');
        } else {
          // Handle failed login
          console.error('Login failed');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {/* Login form */}
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin} className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
