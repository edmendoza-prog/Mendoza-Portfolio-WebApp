import React from 'react'
import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Student & Faculty Profile Management System',
      tags: ['Laravel', 'MySQL', 'Backend'],
      image: '/rors1.jpg',
      description: 'This project demonstrates my current knowledge in backend development, where I successfully built a comprehensive profile management system using Laravel and MySQL. The system allows efficient management of student and faculty information with secure authentication, data validation, and a well-structured database design. Through this project, I gained solid experience in building CRUD operations, implementing user authentication, and working with relational databases to create a functional backend solution that meets real-world educational institution needs.',
      isAspirational: false
    },
    {
      number: '02',
      title: 'Inventory Management System',
      tags: ['Laravel', 'React', 'VB.NET'],
      image: '/ims.jpg',
      description: 'This project represents my learning journey and improvement as a developer, where I tackled the challenge of creating a complete inventory management system using modern technologies like Laravel and React, along with foundational experience in VB.NET. The system tracks products, manages stock levels, and generates reports to help businesses maintain efficient inventory control. By working on this project, I learned to bridge frontend and backend development, handle complex state management, and create user-friendly interfaces that make data management intuitive and accessible for end users.',
      isAspirational: false
    },
    {
      number: '03',
      title: 'Full-Stack Web Application',
      tags: ['Next.js', 'React', 'Vercel'],
      image: '/rors3.webp',
      description: 'This aspirational project represents my goal of becoming a professional developer by building and deploying a modern, full-stack web application that showcases my skills and serves as a living portfolio. I envision creating a polished, responsive platform using cutting-edge technologies like Next.js, integrating APIs for dynamic content, and deploying it seamlessly on Vercel to demonstrate my ability to deliver production-ready applications. This project will not only highlight my technical capabilities but also show my commitment to following industry best practices, maintaining clean code architecture, and creating applications that provide genuine value to users.',
      isAspirational: true
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The "Big Three" Projects
        </motion.h2>
        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          These projects capture where I am today as a developer and where I
          want to go next—from real systems I have already built to an
          aspirational full‑stack application that reflects my long‑term goals.
        </motion.p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`project-card ${project.isAspirational ? 'aspirational' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {project.image && (
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>
              )}
              <div className="project-number">{project.number}</div>
              <h3>{project.title}</h3>
              <div className="tech-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <p>{project.description}</p>
              {project.isAspirational && (
                <div className="status-badge">Aspirational</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
