import React, { useState } from 'react';
import RegistrationPage from './RegistrationPage'; // Import the RegistrationPage component
import LoginPage from './LoginPage'; // Import the LoginPage component
import ForgotPasswordPage from './ForgotPasswordPage'; // Import the ForgotPasswordPage component
import AddEmployeePage from './AddEmployeePage'; // Import the AddEmployeePage component

import DeleteEmployeePage from './DeleteEmployeePage'; // Import the DeleteEmployeePage component
import ModifyEmployeePage from './ModifyEmployeePage'; // Import the ModifyEmployeePage component

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // State to track current page

  // Function to switch between pages
  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  // Render method to display the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'registration':
        return <RegistrationPage />;
      case 'login':
        return <LoginPage />;
      case 'forgotPassword':
        return <ForgotPasswordPage />;
      case 'addEmployee':
        return <AddEmployeePage />;
      case 'deleteEmployee':
        return <DeleteEmployeePage />;
      case 'modifyEmployee':
        return <ModifyEmployeePage />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <div>
      {/* Navigation links */}
      <nav>
        <ul>
          {/* Click event handlers to switch between pages */}
          <li onClick={() => changePage('registration')}>Registration</li>
          <li onClick={() => changePage('login')}>Login</li>
          <li onClick={() => changePage('forgotPassword')}>Forgot Password</li>
          <li onClick={() => changePage('addEmployee')}>Add Employee</li>
          <li onClick={() => changePage('deleteEmployee')}>Delete Employee</li>
          <li onClick={() => changePage('modifyEmployee')}>Modify Employee</li>
        </ul>
      </nav>
      {/* Display current page */}
      {renderPage()}
    </div>
  );
}

export default App;
