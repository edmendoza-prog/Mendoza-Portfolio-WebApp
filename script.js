// Projects data
const projects = [
    {
        number: '01',
        title: 'Student & Faculty Profile Management System',
        tags: ['Laravel', 'MySQL', 'Backend'],
        description: 'This project demonstrates my current knowledge in backend development, where I successfully built a comprehensive profile management system using Laravel and MySQL. The system allows efficient management of student and faculty information with secure authentication, data validation, and a well-structured database design. Through this project, I gained solid experience in building CRUD operations, implementing user authentication, and working with relational databases to create a functional backend solution that meets real-world educational institution needs.',
        isAspirational: false
    },
    {
        number: '02',
        title: 'Inventory Management System',
        tags: ['Laravel', 'React', 'VB.NET'],
        description: 'This project represents my learning journey and improvement as a developer, where I tackled the challenge of creating a complete inventory management system using modern technologies like Laravel and React, along with foundational experience in VB.NET. The system tracks products, manages stock levels, and generates reports to help businesses maintain efficient inventory control. By working on this project, I learned to bridge frontend and backend development, handle complex state management, and create user-friendly interfaces that make data management intuitive and accessible for end users.',
        isAspirational: false
    },
    {
        number: '03',
        title: 'Full-Stack Portfolio & Web Application',
        tags: ['Next.js', 'React', 'Vercel'],
        description: 'This aspirational project represents my goal of becoming a professional developer by building and deploying a modern, full-stack web application that showcases my skills and serves as a living portfolio. I envision creating a polished, responsive platform using cutting-edge technologies like Next.js, integrating APIs for dynamic content, and deploying it seamlessly on Vercel to demonstrate my ability to deliver production-ready applications. This project will not only highlight my technical capabilities but also show my commitment to following industry best practices, maintaining clean code architecture, and creating applications that provide genuine value to users.',
        isAspirational: true
    }
];

// Skills data
const skills = ['React', 'Next.js', 'API Integration', 'Responsive Design', 'Vercel Deployment'];

// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.isAspirational ? 'aspirational' : ''}`;
        
        const projectNumber = document.createElement('div');
        projectNumber.className = 'project-number';
        projectNumber.textContent = project.number;
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        
        const techTags = document.createElement('div');
        techTags.className = 'tech-tags';
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            techTags.appendChild(tagSpan);
        });
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        
        projectCard.appendChild(projectNumber);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(techTags);
        projectCard.appendChild(projectDescription);
        
        if (project.isAspirational) {
            const statusBadge = document.createElement('div');
            statusBadge.className = 'status-badge';
            statusBadge.textContent = 'Aspirational';
            projectCard.appendChild(statusBadge);
        }
        
        projectsGrid.appendChild(projectCard);
    });
}

// Render skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsGrid.appendChild(skillItem);
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Set current year in footer
function setCurrentYear() {
    const yearSpan = document.getElementById('currentYear');
    yearSpan.textContent = new Date().getFullYear();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderSkills();
    setupSmoothScrolling();
    setCurrentYear();
});
