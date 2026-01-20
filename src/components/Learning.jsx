import React from 'react'
import { motion } from 'framer-motion'

function Learning() {
  const skills = ['React', 'Next.js', 'API Integration', 'Responsive Design', 'Vercel Deployment']

  return (
    <section id="learning" className="learning">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Currently Learning
        </motion.h2>
        <div className="learning-content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am actively expanding my skill set by learning React, Next.js, API integration, 
            responsive design principles, and modern deployment practices using Vercel. This learning 
            journey reflects my growth mindset and commitment to staying current with industry-standard 
            technologies that power today's web applications. By focusing on these modern tools, I am 
            positioning myself to build scalable, performant applications that meet professional standards 
            and can adapt to the evolving needs of users and businesses alike.
          </motion.p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning
