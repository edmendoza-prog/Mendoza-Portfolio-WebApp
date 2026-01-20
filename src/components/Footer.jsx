import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Portfolio. Built with passion and dedication.</p>
      </div>
    </footer>
  )
}

export default Footer
