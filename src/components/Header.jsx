import React from 'react'

function Header() {
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
          <div className="logo">My Portfolio</div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('learning')}>Learning</a></li>
            <li><a onClick={() => scrollToSection('journey')}>Journey</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
