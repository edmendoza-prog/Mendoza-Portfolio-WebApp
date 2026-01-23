import React from 'react'
import { motion } from 'framer-motion'

function Journey() {
  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      reason: 'Modern UI frameworks with excellent performance and developer experience'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Laravel', 'RESTful APIs', 'MySQL'],
      reason: 'Robust backend solutions for building scalable applications'
    },
    {
      category: 'Tools & Deployment',
      technologies: ['Git', 'Vercel', 'VS Code', 'npm/yarn'],
      reason: 'Essential tools for version control, deployment, and productivity'
    }
  ]

  return (
    <section id="journey" className="journey">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Choosing the Tech Stack
        </motion.h2>
        <motion.div 
          className="journey-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            After careful consideration, I have decided to follow the Pro Path by focusing on React 
            and Next.js for my future projects because these technologies are modern, industry‑relevant, 
            and widely used in real production environments. React's component-based architecture and 
            vast ecosystem give me the flexibility to reuse UI pieces, manage complex state, and keep 
            code organized as projects grow. Next.js extends these capabilities with server-side 
            rendering, static site generation, and performance optimizations that help applications feel 
            fast and responsive for users. Combined with tools like Laravel, Node.js, and MySQL on the 
            backend, this stack lets me practice building complete, end‑to‑end experiences—from the 
            database layer all the way to the final UI.
          </p>
          
          <div className="tech-stack-grid">
            {techStack.map((stack, index) => (
              <motion.div 
                key={index} 
                className="tech-stack-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <h3>{stack.category}</h3>
                <div className="tech-items">
                  {stack.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <p className="tech-reason">{stack.reason}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="journey-goals"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>My Development Goals</h3>
            <ul>
              <li>Master full-stack development with React and Node.js ecosystem</li>
              <li>Build and deploy production-ready applications using modern CI/CD practices</li>
              <li>Contribute to open-source projects and collaborate with other developers</li>
              <li>Stay updated with emerging technologies and best practices in web development</li>
              <li>Create user-centric applications that solve real-world problems</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Journey
