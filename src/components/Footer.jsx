import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <p>
          &copy; {currentYear} Ed Ryan S. Mendoza. This portfolio is a snapshot
          of my journey as a web developer and will keep evolving as I learn
          new tools and ship new projects.
        </p>
      </div>
    </footer>
  )
}

export default Footer
