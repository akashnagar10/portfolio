import React from 'react';
import './Hero.css';
import heroProfile from '../assets/hero-pic.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting fade-in">Hello, I'm</div>
          <h1 className="hero-name fade-in-up">Akash Nagar</h1>
          <p className="hero-title fade-in-up">Software Engineer</p>
          <p className="hero-description fade-in-up">
            Passionate about crafting elegant solutions and building scalable software applications.
            I specialize in full-stack development, creating robust web and mobile experiences 
            that solve real-world problems with clean, maintainable code.
          </p>
          <div className="hero-highlights fade-in-up">
            <span className="hero-highlight-chip">3+ Years Experience</span>
            <span className="hero-highlight-chip">50+ Projects</span>
            <span className="hero-highlight-chip">Full-Stack & Mobile</span>
          </div>
          <div className="hero-buttons fade-in-up">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a 
              href="#projects" 
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>
          <div className="hero-social fade-in">
            <a href="https://github.com/akashnagar10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/akash-nagar-7823a9217/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:akashdev1006@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-visual fade-in-up">
            <div className="hero-image-wrapper">
              <img src={heroProfile} alt="Akash Nagar portrait illustration" className="hero-photo" />
            </div>
            <div className="hero-badge badge-top">Full-Stack Developer</div>
            <div className="hero-badge badge-bottom">React • Node.js • JavaScript</div>
          </div>
        </div>
      </div>
      {/* <div className="scroll-indicator">
        <div className="mouse"></div>
      </div> */}
    </section>
  );
};

export default Hero;
