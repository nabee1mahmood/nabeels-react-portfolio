import React from 'react'
import './navbar.css'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="nav-brand" href="#home" aria-label="Nabeel Mahmood, home">
        <span className="nav-brand__mark" aria-hidden="true">N</span>
        <span>Nabeel Mahmood</span>
      </a>
      <ul className="nav-menu">
        <li><a href="#home" className="anchor-link">Home</a></li>
        <li><a href="#about" className="anchor-link">About Me</a></li>
        <li><a href="#experience" className="anchor-link">Professional Experience</a></li>
        <li><a href="#projects" className="anchor-link">Projects</a></li>
        <li><a href="#contact" className="anchor-link">Contact</a></li>
      </ul>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      >
        {theme === 'dark' ? (
          <span className="theme-icon" aria-hidden>☀️</span>
        ) : (
          <span className="theme-icon" aria-hidden>🌙</span>
        )}
        <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </nav>
  )
}

export default Navbar
