import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaMobileAlt, 
  FaServer, 
  FaBitcoin, 
  FaBrain,
  FaGamepad,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaApple,
  FaGooglePlay
} from 'react-icons/fa'

import './Projects.css'

// Load multiple images dynamically
const budgetToursImages = Object.values(import.meta.glob('../assets/Budget_tours_assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }));
const swiftlyImages = Object.values(import.meta.glob('../assets/Swiftly_assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }));
const discordBotImages = Object.values(import.meta.glob('../assets/Discord-server-moderator-bot/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }));
const examAssistantImages = Object.values(import.meta.glob('../assets/Exams_assistant_assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }));
const eFactureImages = Object.values(import.meta.glob('../assets/E-Facture_assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' }));

const ProjectCard = ({ project, index, onImageClick }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (e, i) => {
    e.stopPropagation();
    setCurrentIdx(i);
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image-wrapper">
        {project.images.length > 0 ? (
          <div className="carousel-container">
            <img 
              src={project.images[currentIdx]} 
              alt={`${project.title} - ${currentIdx + 1}`}
              className="project-image"
              loading="lazy"
              onClick={(e) => { e.stopPropagation(); onImageClick({ images: project.images, index: currentIdx }); }}
              style={{ cursor: 'zoom-in' }}
            />
            {project.images.length > 1 && (
              <>
                <div className="carousel-controls">
                  <button className="carousel-btn prev" aria-label="Previous" onClick={prevImage}>&#10094;</button>
                  <button className="carousel-btn next" aria-label="Next" onClick={nextImage}>&#10095;</button>
                </div>
                <div className="carousel-dots">
                  {project.images.map((_, i) => (
                    <span 
                      key={i} 
                      className={`dot ${i === currentIdx ? 'active' : ''}`} 
                      onClick={(e) => goToImage(e, i)}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="no-image-placeholder">
            <span>No Images</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <div className="project-header-row">
          <h3 className="project-title-new">{project.title}</h3>
          <div className="project-action-links">
            {project.githubLink ? (
              <motion.a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-link-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View on GitHub"
              >
                <FaGithub />
              </motion.a>
            ) : (
              <div className="action-link-icon disabled" title="Private Repository or Unavailable">
                <FaGithub />
              </div>
            )}
            {(project.websiteLink || project.liveLink) && (
              <motion.a 
                href={project.websiteLink || project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-link-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Website"
              >
                <FaExternalLinkAlt />
              </motion.a>
            )}
            {project.appStoreLink && (
              <motion.a 
                href={project.appStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-link-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="App Store"
              >
                <FaApple />
              </motion.a>
            )}
            {project.playStoreLink && (
              <motion.a 
                href={project.playStoreLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-link-icon"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Google Play"
              >
                <FaGooglePlay />
              </motion.a>
            )}
          </div>
        </div>
        
        <div className="project-subtitle">{project.subtitle}</div>
        
        <p className="project-description-new">
          {project.description}
        </p>
        
        <div className="project-tech-pills">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [lightboxData, setLightboxData] = useState({ isOpen: false, images: [], index: 0 })

  const handleNextLightbox = (e) => {
    e.stopPropagation()
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }))
  }

  const handlePrevLightbox = (e) => {
    e.stopPropagation()
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }))
  }

  const categories = [
    { name: 'All', icon: <FaCode /> },
    { name: 'Fullstack', icon: <FaServer /> },
    { name: 'Mobile', icon: <FaMobileAlt /> },
    { name: 'AI/ML', icon: <FaBrain /> },
  ]

  const projects = [
    {
      title: 'Budget Tours',
      subtitle: 'Laravel Travel Web Application',
      description: 'A comprehensive travel website for browsing and searching destinations, viewing packages, reading travel blogs, and booking tours via WhatsApp integration. Includes a full admin panel.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Node.js', 'Bootstrap'],
      categories: ['Fullstack'],
      images: budgetToursImages,
      githubLink: 'https://github.com/PeinNotFound/Budget-Tours-Laravel'
    },
    {
      title: 'Swiftly',
      subtitle: 'Freelance & Client Platform',
      description: 'A comprehensive freelancer platform featuring real-time messaging, WebSocket notifications, user authentication, and admin verification workflows for freelancers.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets'],
      categories: ['Fullstack'],
      images: swiftlyImages,
      githubLink: 'https://github.com/PeinNotFound/Swiftly_demo'
    },
    {
      title: 'Discord Server Moderator Bot',
      subtitle: 'Feature-Rich Discord Bot',
      description: 'A comprehensive moderation bot featuring advanced anti-raid protection, an automated staff ranking system, server backup capabilities, and complex voice/chat verification flows.',
      technologies: ['Node.js', 'Discord.js', 'MongoDB', 'JavaScript'],
      categories: ['Fullstack'],
      images: discordBotImages,
      githubLink: 'https://github.com/PeinNotFound/Discord-server-moderator-bot'
    },
    {
      title: 'E-Facture',
      subtitle: 'Electronic Invoice Web App',
      description: 'A modern web application built for an ALX SE final project. Designed to manage and generate electronic invoices efficiently. Features user authentication, invoice management, robust PDF generation, and a responsive UI.',
      technologies: ['Laravel', 'React', 'Tailwind CSS', 'Vite', 'MySQL'],
      categories: ['Fullstack'],
      images: eFactureImages,
      githubLink: 'https://github.com/PeinNotFound/e-facture'
    },
    {
      title: 'Exam Assistant',
      subtitle: 'AI-Powered Study Mobile App',
      description: 'A comprehensive AI-powered exam preparation and study management application featuring personalized content generation, gamification, and intelligent study planning routines.',
      technologies: ['Flutter', 'Dart', 'Django', 'Python', 'REST API', 'AI'],
      categories: ['Mobile', 'AI/ML', 'Fullstack'],
      images: examAssistantImages,
      githubLink: ''
    }
  ]

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => Array.isArray(project.categories) && project.categories.includes(activeCategory))
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="project-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              className={`category-btn ${activeCategory === category.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} onImageClick={(data) => setLightboxData({ ...data, isOpen: true })} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 6 && (
          <motion.div 
            className="view-more-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              className="btn-view-more-projects"
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>Show Less</>
              ) : (
                <>View More Projects ({filteredProjects.length - 6} more)</>
              )}
            </motion.button>
          </motion.div>
        )}

        <AnimatePresence>
          {lightboxData.isOpen && lightboxData.images.length > 0 && (
            <motion.div 
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}
            >
              <button className="lightbox-close" onClick={() => setLightboxData(prev => ({ ...prev, isOpen: false }))}>&times;</button>
              
              {lightboxData.images.length > 1 && (
                <>
                  <button className="lightbox-btn prev" aria-label="Previous image" onClick={handlePrevLightbox}>&#10094;</button>
                  <button className="lightbox-btn next" aria-label="Next image" onClick={handleNextLightbox}>&#10095;</button>
                </>
              )}

              <motion.img 
                key={lightboxData.index} // Forces re-animation on image change
                src={lightboxData.images[lightboxData.index]} 
                alt={`Expanded view ${lightboxData.index + 1}`} 
                className="lightbox-image"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
