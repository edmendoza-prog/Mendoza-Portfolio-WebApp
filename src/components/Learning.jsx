import React from 'react'
import { motion } from 'framer-motion'

function Learning() {
  const skills = [
    {
      title: 'React',
      description: 'Building interactive user interfaces with reusable components, managing state, and handling user interactions to create smooth, dynamic experiences.',
      icon: '⚛️',
      level: 'In Progress'
    },
    {
      title: 'Next.js',
      description: 'Creating fast, SEO-friendly React applications with file-based routing, server-side rendering, and API routes for full‑stack features.',
      icon: '🚀',
      level: 'In Progress'
    },
    {
      title: 'API Integration',
      description: 'Connecting frontends to real-world data and backend services using REST APIs, handling responses, errors, and authentication securely.',
      icon: '🔗',
      level: 'Improving'
    },
    {
      title: 'Responsive Design',
      description: 'Designing layouts that adapt smoothly to phones, tablets, and desktops using flexible grids, media queries, and mobile‑first principles.',
      icon: '📱',
      level: 'Improving'
    },
    {
      title: 'Vercel Deployment',
      description: 'Deploying and hosting modern web apps on Vercel with automatic builds, previews, and custom domains for a professional deployment workflow.',
      icon: '☁️',
      level: 'Exploring'
    }
  ]

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
                tabIndex={0}
                role="button"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="skill-icon-circle">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <span className="skill-level">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning
