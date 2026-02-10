import React from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTheme } from '../../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li><AnchorLink href="#home" className="anchor-link">Home</AnchorLink></li>
        <li><AnchorLink href="#about" className="anchor-link">About Me</AnchorLink></li>
        <li><AnchorLink href="#experience" className="anchor-link">Professional Experience</AnchorLink></li>
        <li><AnchorLink href="#projects" className="anchor-link">Projects</AnchorLink></li>
        <li><AnchorLink href="#contact" className="anchor-link">Contact</AnchorLink></li>
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
    </div>
  )
}

export default Navbar
