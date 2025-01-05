import React, { useState } from 'react';
import { FiMenu, FiUser, FiSettings, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button onClick={toggleSidebar} className="nav__icon nav__icon--menu">
        <FiMenu size={24} />
      </button>
      
      <div className={`nav__sidebar ${isSidebarOpen ? 'nav__sidebar--open' : ''}`}>
        <button className="nav__tab mt-5">History</button>
        <button className="nav__icon">
          <FiUser size={24} />
        </button>
        <button className="nav__icon">
          <FiSettings size={24} />
        </button>
        <button onClick={toggleTheme} className="nav__icon">
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </div>
    </>
  );
};

export default Nav;