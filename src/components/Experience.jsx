import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer & Team Leader (Internship)',
      company: 'Agh Data Agency - Remote',
      date: 'Dec. 2025 – Mar. 2026',
      description: '• Developed REST APIs using Django and Django REST Framework.\n• Designed and managed PostgreSQL and MongoDB databases.\n• Implemented a microservices architecture for a mobile application.\n• Secured API endpoints with robust authentication and permission layers.\n• Led and coordinated the backend team: task assignment, sprint planning, and unblocking developers.\n• Facilitated communication between backend and frontend mobile teams to align deliverables.\n• Tracked project progress across multiple services and reported to stakeholders.',
      icon: <FaBriefcase />
    },
    {
      title: 'Personal Projects & Bots',
      company: 'Freelance / Self-employed',
      date: 'Jul. 2025 – Dec. 2025',
      description: '• Built Discord bots in Node.js (Discord.js) for moderation and voice channel management.\n• Developed Full Stack applications using Laravel + React and MERN Stack.\n• Integrated REST APIs, JWT authentication, and full CRUD operations.\n• Collaborative development via GitHub using Agile methodology.',
      icon: <FaBriefcase />
    },
    {
      title: 'Full Stack Developer (Internship)',
      company: 'Marrakech budget tours - Marrakech',
      date: 'Apr. 2025 – May 2025',
      description: '• Developed a web application using Laravel Blade and MySQL.\n• Built and configured a full admin panel from scratch.\n• Handled authentication flows and tourist circuit management features.\n• Optimized project performance and overall code structure.',
      icon: <FaBriefcase />
    }
  ]

  const education = [
    {
      title: 'DTS – Full Stack Web Development',
      company: 'ISTA NTIC SYBA, Marrakech',
      date: '2023 – 2025',
      description: '• PHP, JavaScript, Laravel, React, Express.js\n• Databases: MySQL, MongoDB\n• Desktop Applications: Python (Tkinter)\n• Agile methodologies and software engineering best practices',
      icon: <FaGraduationCap />
    },
    {
      title: 'Baccalaureate in Physical & Chemical Sciences',
      company: 'Lycée Tamellalt, Tamellalt',
      date: '2022',
      description: '',
      icon: <FaGraduationCap />
    }
  ]

  const certifications = [
    {
      title: 'ALX Software Engineer – Backend',
      date: '2025',
      icon: <FaCertificate />
    },
    {
      title: 'Meta Front-End Developer – Coursera',
      date: '2024',
      icon: <FaCertificate />
    },
    {
      title: 'Laravel Developer – Udemy',
      date: '2024',
      icon: <FaCertificate />
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="title-highlight">Journey</span>
        </motion.h2>

        <div className="experience-grid">
          <div className="experience-column">
            <h3 className="column-title"><FaBriefcase /> Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <span className="timeline-date">{exp.date}</span>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="column-title"><FaGraduationCap /> Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.title}</h4>
                    <h5>{edu.company}</h5>
                    <span className="timeline-date">{edu.date}</span>
                    <p className="timeline-desc">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h3 className="column-title mt-4"><FaCertificate /> Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="cert-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
