# Portfolio Website

A modern, responsive portfolio website built with React.js showcasing skills and experience as a React Native developer.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Sections: Hero, About, Skills, Projects, Contact
- 🔗 Social media integration
- 📧 Contact form

## Technologies Used

- React.js
- CSS3 (with CSS Variables)
- Font Awesome Icons
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`): Update the greeting, name, and description
2. **About Section** (`src/components/About.js`): Modify the about text and statistics
3. **Skills Section** (`src/components/Skills.js`): Update skills and proficiency levels
4. **Projects Section** (`src/components/Projects.js`): Add your actual projects
5. **Contact Section** (`src/components/Contact.js`): Update contact information and social links

### Update Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### Add Social Links

Update the social media links in:
- `src/components/Hero.js`
- `src/components/Contact.js`
- `src/components/Footer.js`

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License

This project is open source and available for personal use.
