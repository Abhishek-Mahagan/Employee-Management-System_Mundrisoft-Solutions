import React, { useState } from 'react';
import './ForgotPasswordPage.css'; // Import CSS file for styling

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Send password reset link to the user's email address
    fetch('http://localhost:5000/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(response => {
        if (response.ok) {
          // Password reset link sent successfully
          console.log('Password reset link sent to email:', email);
        } else {
          // Handle failed request
          console.error('Failed to send password reset link');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {/* Forgot password form */}
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="button" onClick={handleForgotPassword}>Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
