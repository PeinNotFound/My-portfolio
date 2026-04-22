import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiVuedotjs, 
  SiPython, 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiAngular
} from 'react-icons/si'
import { 
  FaHospital, 
  FaMoneyBillWave, 
  FaShoppingCart, 
  FaShieldAlt,
  FaBitcoin,
  FaRobot
} from 'react-icons/fa'
import './About.css'

const About = () => {
  const techIcons = [
    // Placeholder for tech icons (can fill in as needed)
  ]

  return (
    <section id="about" className="about">
      {/* Floating Tech Icons - Full Width */}
      <div className="floating-icons">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            style={item.position}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              delay: item.delay * 0.1,
              y: {
                duration: 4 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="title-highlight">Me</span>
        </motion.h2>
        
        <div className="about-wrapper">
          <div className="about-content">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Versatile <strong>Full Stack Developer</strong> with a strong backend focus and proven experience in building modern <strong>REST APIs</strong>, <strong>microservices architectures</strong>, and Agile team environments. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skilled at both individual technical delivery and coordinating cross-functional teams, with hands-on experience leading backend and mobile development workflows during a startup internship.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Throughout my journey, I have successfully developed complete internal systems, managed databases (PostgreSQL, MongoDB, MySQL), and built reliable backends for various applications using tools like Django, Node.js, and Laravel.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Always eager to learn and improve, I pride myself on solving complex problems with efficient, scalable code while maintaining a focus on user experience and team collaboration.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
