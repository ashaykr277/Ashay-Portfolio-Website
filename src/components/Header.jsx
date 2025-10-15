import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { WiDaySunny } from "react-icons/wi";
import 'boxicons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };
  const navigate   = useNavigate();

  function goToContact() {
    navigate("/contact");
  }

  return (
    <>
      <header>
        <div className="logo">
          <div className="s-logo">
            <img className="S" src="./S-logo-set/Ashay logo.png" alt="ashay logo"/>
            {/* <img className="brackets" src="./S-logo-set/s-brackets.png" alt="" /> */}
          </div>
        </div>

        {/* menuOpen state controls whether .nav-ele has the .active class.

        Clicking the menu icon sets menuOpen to true → .nav-ele.active → right: 0.

        Clicking the close icon sets menuOpen to false → .nav-ele → right: -250px.

        The transition makes it slide smoothly. */}
        <nav>
          <ul className={`nav-ele ${menuOpen ? "active" : ""}`}>
            <div className="close-btn" onClick={() => setMenuOpen(false)}>
              <i className='bx bx-x'></i>
            </div>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Project</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className='right-btn'>
          {/* Dark Mode Toggle */}
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? (
              <i class='bx bx-moon' ></i>
            ) : (
              <i class='bx bx-sun'></i>
            )}
          </button>
          {/* Menu Button */}
          <button className="menu" onClick={() => setMenuOpen(true)}>
            <box-icon name='menu'></box-icon>
          </button>
          <button className="hire" onClick={goToContact}>Hire</button>
        </div>
      </header>
    </>
  );
}

export default Header;
