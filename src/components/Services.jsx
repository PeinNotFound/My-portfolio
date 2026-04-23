import { motion } from 'framer-motion'
import {
  SiReact,
  SiAndroid,
  SiNodedotjs,
  SiEthereum,
  SiOpenai,
  SiGraphql
} from 'react-icons/si'
import { FaMobileAlt, FaCode, FaServer, FaBrain, FaRobot, FaDatabase } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <SiReact />,
      title: 'React Development',
      description: 'Building modern, responsive web applications with React, Next.js, TypeScript, and state management solutions for scalable enterprise systems.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Flutter/Kotlin Apps',
      description: 'Cross-platform iOS & Android mobile applications with Flutter or Kotlin, delivering native performance and shared codebase efficiency.'
    },
    {
      icon: <SiNodedotjs />,
      title: 'Fullstack Development',
      description: 'End-to-end solutions combining React frontend with Node.js backend, RESTful/GraphQL APIs, and database integration.'
    },
    {
      icon: <SiEthereum />,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications (DApps), smart contracts, NFT marketplaces, and DeFi platforms using Ethereum and Solidity.'
    },
    {
      icon: <SiOpenai />,
      title: 'AI Integration',
      description: 'Integrating OpenAI GPT, machine learning models, and intelligent automation solutions into modern web and mobile applications.'
    },
    {
      icon: <FaDatabase />,
      title: 'Backend Dev',
      description: 'Robust server-side architecture and API design using Laravel, PHP, Express.js, Python, and Django, coupled with expert database management across both SQL and NoSQL.'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Build
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Specialized in scalable web and mobile development using React, React Native, and full-stack architectures from design through deployment. </motion.p>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-professional"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="service-icon-professional">
                {service.icon}
              </div>
              <h3 className="service-title-professional">{service.title}</h3>
              <p className="service-description-professional">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
