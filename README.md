# Senior Frontend Engineer Portfolio

A modern, professional portfolio website for a Senior Frontend Engineer with 8+ years of experience. Built with React and inspired by modern portfolio designs.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Fully responsive for all devices
- ⚡ Built with React and Vite for fast performance
- 🎯 Sections: Hero, About, Skills, Experience, Projects, Contact
- 🌈 Beautiful gradient effects and modern UI
- ✨ Smooth scrolling navigation

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Inter Font** - Google Fonts for typography

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills section
│   ├── Experience.jsx     # Experience section
│   ├── Projects.jsx        # Projects section
│   └── Contact.jsx         # Contact section
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Customization

### Update Personal Information

1. **Contact Information**: Edit `src/components/Contact.jsx` to update email, LinkedIn, and GitHub links
2. **Experience**: Modify `src/components/Experience.jsx` to add your work history
3. **Projects**: Update `src/components/Projects.jsx` with your actual projects
4. **Skills**: Customize `src/components/Skills.jsx` with your technical skills
5. **About**: Edit `src/components/About.jsx` with your personal story

### Styling

- Global styles: `src/index.css`
- Component styles: Each component has its own CSS file in `src/components/`
- Color scheme: Modify CSS variables in `src/index.css`

## Deployment

This portfolio can be deployed to:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, feel free to reach out!
