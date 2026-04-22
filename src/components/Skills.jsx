import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiRedux,
  SiGraphql,
  SiTailwindcss,
  SiSass,
  SiVuedotjs,
  SiDocker,
  SiGit,
  SiExpo,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJest,
  SiWebpack,
  SiVite,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMysql,
  SiRedis,
  SiBootstrap,
  SiAdobexd,
  SiSketch,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiStorybook,
  SiCypress,
  SiSelenium,
  SiMocha,
  SiAngular,
  SiSvelte,
  SiFlutter,
  SiKotlin,
  SiIonic,
  SiSwift,
  // SiJava,
  SiLaravel,
  SiNestjs,
  SiDotnet,
  SiOracle,
  SiAmazon,
  SiGoogle,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiPytorch,
  SiOpenai,
  // SiOracle,
} from 'react-icons/si'
import { 
  FaMobileAlt, 
  FaDatabase, 
  FaServer, 
  FaCode,
  FaPalette,
  FaCog,
  FaComments,
  FaLightbulb,
  FaCrown,
  FaRocket,
  FaUsers,
  FaHeart,
  FaBrain,
  FaLanguage
} from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical')

  const tabs = [
    { name: 'Technical', icon: <FaCode /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
    { name: 'Tools', icon: <FaCog /> }
  ]

  const technicalSkillsTop = [
    {
      title: 'Frontend & Frameworks',
      icon: <FaCode />,
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'React', icon: <SiReact /> }
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'PHP', icon: <FaServer /> },
        { name: 'Django', icon: <FaServer /> },
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'C', icon: <FaCode /> }
      ]
    },
    {
      title: 'Databases & Concepts',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'REST API', icon: <FaServer /> },
        { name: 'JWT', icon: <FaCode /> },
        { name: 'Microservices', icon: <FaServer /> }
      ]
    }
  ]

  const technicalSkillsBottom = [
    {
      title: 'Languages',
      icon: <FaComments />,
      skills: [
        { name: 'Arabic (Native)', icon: <FaComments /> },
        { name: 'English (Fluent)', icon: <FaLanguage /> },
        { name: 'French (Intermediate)', icon: <FaLanguage /> }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <FaMobileAlt />,
      skills: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Kotlin', icon: <SiKotlin /> }
      ]
    }
  ]

  const softSkills = [
    {
      title: 'Team Leadership',
      icon: <FaCrown />,
      description: 'Experience leading backend teams, task assignment, and sprint planning.'
    },
    {
      title: 'Agile',
      icon: <FaRocket />,
      description: 'Collaborative development via GitHub using Agile methodology.'
    },
    {
      title: 'Problem-Solving',
      icon: <FaLightbulb />,
      description: 'Analytical thinking and creative problem-solving abilities to tackle complex technical challenges.'
    },
    {
      title: 'Communication',
      icon: <FaComments />,
      description: 'Facilitating communication between backend and frontend teams to align deliverables.'
    }
  ]

  const tools = [
    {
      title: 'Development Tools',
      icon: <FaCode />,
      tools: [
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Postman', icon: <SiPostman /> }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical competencies and professional skills I&apos;ve developed through experience and continuous learning
        </motion.p>

        {/* Skill Tabs */}
        <motion.div 
          className="skill-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              className={`skill-tab ${activeTab === tab.name ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'Technical' && (
            <motion.div
              key="technical"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Row - 3 Categories */}
              <div className="technical-grid-3">
                {technicalSkillsTop.map((category, index) => (
                  <motion.div
                    key={index}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Row - 2 Categories */}
              <div className="technical-grid-2">
                {technicalSkillsBottom.map((category, index) => (
                  <motion.div
                    key={index}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Soft Skills' && (
            <motion.div
              key="soft-skills"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="soft-skill-card-compact"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="soft-skill-icon-compact">{skill.icon}</div>
                    <h3 className="soft-skill-title-compact">{skill.title}</h3>
                    <p className="soft-skill-description-compact">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Tools' && (
            <motion.div
              key="tools"
              className="skills-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="technical-grid-3">
                {tools.map((category, index) => (
                  <motion.div
                    key={index}
                    className="skill-category-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="category-header">
                      <div className="category-icon-circle">{category.icon}</div>
                      <h3 className="category-title-tech">{category.title}</h3>
                    </div>
                    <div className="skills-list-tech">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="skill-badge-with-icon">
                          <span className="skill-icon-small">{tool.icon}</span>
                          <span>{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
