import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm <strong>Akash Nagar</strong>, a dedicated <strong>Software Engineer</strong> with a passion 
            for creating innovative solutions that make a difference. My expertise spans across full-stack 
            development, where I build scalable web applications, robust APIs, and intuitive user interfaces.
          </p>
          
          <p>
            I thrive in collaborative environments and enjoy tackling complex challenges. With a focus on 
            clean architecture, performance optimization, and user experience, I deliver solutions that 
            are not only functional but also maintainable and scalable. Whether working on frontend interfaces, 
            backend systems, or full-stack applications, I bring attention to detail and a commitment to excellence.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <i className="fas fa-mobile-alt"></i>
              <div>
                <h3>Mobile Development</h3>
                <p>Building native-feeling mobile apps with React Native</p>
              </div>
            </div>
            <div className="highlight-item">
              <i className="fas fa-globe"></i>
              <div>
                <h3>Web Development</h3>
                <p>Creating responsive and performant web applications</p>
              </div>
            </div>
            <div className="highlight-item">
              <i className="fas fa-server"></i>
              <div>
                <h3>Backend Development</h3>
                <p>Designing and implementing robust server-side solutions</p>
              </div>
            </div>
            <div className="highlight-item">
              <i className="fas fa-database"></i>
              <div>
                <h3>Databases</h3>
                <p>Building efficient schemas and optimizing data access for scale</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
