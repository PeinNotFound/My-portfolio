# Ahmed Hmimida - Portfolio

A modern, professional portfolio website showcasing the skills, experience, and projects of Ahmed Hmimida, a Full Stack Developer, Backend Engineer, and Team Leader. Built with React, Vite, and Framer Motion for smooth, dynamic interactions.

## 🌟 Live Demo

[View Live Portfolio](https://PeinNotFound.github.io/My-portfolio/)

## ✨ Key Features

- **Dynamic Hero Section**: Interactive, animated introduction detailing roles and key statistics.
- **Experience Timeline**: A fully responsive chronological map of professional internships, freelance work, education, and certifications.
- **Interactive Project Showcase**: Complex project cards featuring custom-built React carousels that dynamically load assets.
- **Image Lightbox System**: Seamless image expansion modals built into the project gallery for high-resolution viewing.
- **Comprehensive Skills Matrix**: Categorized technological proficiencies including Mobile Development (Flutter, Kotlin) and Backend Engineering (Laravel, Python, Express.js).
- **Automated Deployment**: Fully configured GitHub Actions CI/CD pipeline targeting GitHub Pages.

## 🛠 Tech Stack

- **Frontend**: React (v18), Vite, CSS3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Actions & GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/PeinNotFound/My-portfolio.git
cd My-portfolio
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/My-portfolio/`

### Build for Production

```bash
npm run build
```

The built files will be output to the `dist` directory.

## 📁 Project Structure

```
src/
├── assets/                 # Project images and global assets (glob imported)
├── components/
│   ├── Navigation.jsx      # Sticky responsive navigation bar
│   ├── Hero.jsx            # Animated hero section
│   ├── About.jsx           # Profile and biography
│   ├── Skills.jsx          # Sortable tech stack matrix
│   ├── Experience.jsx      # Resume and timeline section
│   ├── Projects.jsx        # Project carousels and lightbox modal
│   └── Contact.jsx         # Footer and social links
├── App.jsx                 # Main application structure
├── main.jsx                # React DOM render entry
└── index.css               # CSS variables and global theme
```

## 🌐 Deployment Configuration

This repository is set up with an automated continuous deployment pipeline. Any pushes to the `main` branch will trigger a [GitHub Actions workflow](.github/workflows/deploy.yml) that builds the project using Vite and automatically publishes the `/dist` directory to **GitHub Pages**.

## 📫 Contact

- **Email**: ahmed0hmimida@gmail.com
- **LinkedIn**: [Ahmed Hmimida](https://linkedin.com/in/ahmed-hmimida-119518319)
- **GitHub**: [PeinNotFound](https://github.com/PeinNotFound)
