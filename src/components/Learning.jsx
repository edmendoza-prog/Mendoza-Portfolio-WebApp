import React from 'react'

function Learning() {
  const skills = ['React', 'Next.js', 'API Integration', 'Responsive Design', 'Vercel Deployment']

  return (
    <section id="learning" className="learning">
      <div className="container">
        <h2>Currently Learning</h2>
        <div className="learning-content">
          <p>
            I am actively expanding my skill set by learning React, Next.js, API integration, 
            responsive design principles, and modern deployment practices using Vercel. This learning 
            journey reflects my growth mindset and commitment to staying current with industry-standard 
            technologies that power today's web applications. By focusing on these modern tools, I am 
            positioning myself to build scalable, performant applications that meet professional standards 
            and can adapt to the evolving needs of users and businesses alike.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning
