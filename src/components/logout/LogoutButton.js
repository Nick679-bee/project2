import React from 'react';
import './logoutbutton.css';


const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('/user/logout', {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await response.json();
    } catch (error) { }
  }

  return (
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
