import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaTelegram, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.h2 
          className="section-title contact-title-styled"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="title-highlight">Me</span>
        </motion.h2>
        
        <motion.p 
          className="contact-subtitle-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out with any questions, project inquiries, or just to say hello. I'm always open to discussing new opportunities and ideas.
        </motion.p>

        {/* Contact Form Card */}
        <motion.div 
          className="contact-form-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="form-card-title">Send a Message</h3>
          
          <form className="contact-form-modern" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group-contact">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-contact">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group-contact">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group-contact">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="btn-send-message-new"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">© 2026 Ahmed Hmimida. All rights reserved.</p>
          <div className="footer-social">
            <a 
              href="https://linkedin.com/in/ahmed-hmimida-119518319" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/PeinNotFound" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:ahmed0hmimida@gmail.com"
              className="footer-social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
