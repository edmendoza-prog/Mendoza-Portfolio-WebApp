import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div 
          className="profile-picture"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="\Motoko.jpeg"
            alt="Ed Ryan S. Mendoza" 
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, I'm Ed Ryan S. Mendoza
        </motion.h1>
        <motion.p 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I am an aspiring web developer passionate about building clean, functional web applications 
          while continuously learning modern technologies to create meaningful digital solutions.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
