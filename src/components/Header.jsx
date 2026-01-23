import React, { useEffect, useState } from 'react'

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setIsDarkMode(true)
      document.body.classList.add('dark-mode')
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev
      if (next) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('theme', 'dark')
      } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <nav>
        <div className="container">
          <div className="logo">
            <img
              src="/mendoza.png"
              alt="Profile"
              className="logo-avatar"
            />
            <span>My Portfolio</span>
          </div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('learning')}>Learning</a></li>
            <li><a onClick={() => scrollToSection('journey')}>Journey</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li>
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
