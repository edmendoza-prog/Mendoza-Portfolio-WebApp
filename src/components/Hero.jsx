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
            src="/mendoza.png"
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
          I am an aspiring web developer who enjoys turning ideas into working products. I focus on 
          writing clean, understandable code, experimenting with modern tools like React and Next.js, 
          and always asking how each feature can genuinely help the people who use it.
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
