import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [showAllOtherProjects, setShowAllOtherProjects] = useState(false);
  const projects = [
    {
      title: 'Waqaf360',
      description: 'Waqaf360 by Waqaf An-Nur is your trusted Islamic lifestyle app designed to guide your worship, strengthen your community connection, and make giving effortless.',
      technologies: ['React Native', 'Redux', 'Native Modules', 'Stripe API', 'Push Notifications'],
      category: 'Mobile',
      featured: true,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.wan.waqaf360&hl=en_IN',
      appStoreLink: 'https://apps.apple.com/in/app/waqaf360/id6748613034'
    },
    {
      title: 'AI-Powered Financial Automation Platform',
      description: 'A full-stack SaaS finance platform built with Next.js, delivering AI-powered transaction processing, automated reconciliation, real-time reporting dashboards, smart invoicing, and tax compliance workflows.',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redux'],
      category: 'Web',
      featured: true,
      link: 'https://fabric.ey.com'
    },
    // {
    //   title: 'Task Management API',
    //   description: 'A robust RESTful API for task management built with Node.js and Express, featuring user authentication, task CRUD operations, and real-time notifications.',
    //   technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
    //   category: 'Backend',
    //   featured: false
    // },
    {
      title: 'JoyRide: Book Moto Taxi & Car',
      description: 'JoyRide is a leading mobility superapp offering affordable, convenient, and reliable transportation services in the Philippines. Since 2019, JoyRide has been empowering Filipinos with access to quality, value-for-money services, supported by a user-friendly app, an extensive network of driver-partners, and a diverse range of on-demand mobility solutions.',
      technologies: ['React Native', 'JavaScript', 'RESTful APIs', 'AWS', 'Push Notifications'],
      category: 'Mobile',
      featured: false,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.joyride.rider&hl=en_IN',
      appStoreLink: 'https://apps.apple.com/in/app/joyride-book-moto-taxi-car/id1482083123'
    },
    {
      title: 'AI-Powered Enterprise Technology Acceleration Platform',
      description: 'A foundational enterprise technology platform built to accelerate solution delivery using cloud-native architecture, AI-driven automation, and secure, reusable data assets.',
      technologies: ['Next.js', 'Redux','Node.js', 'MongoDB'],
      category: 'Web',
      featured: false,
      link: 'https://fabric.ey.com'
    },
    {
      title: 'Digital Zakat Management Platform (AMIL APPS)',
      description: 'A scalable digital zakat management platform designed to streamline collection and operational workflows through secure payment integrations and real-time data management. Implemented Tap to Pay via Stripe, DuitNow integration using Node.js modules, offline-first data storage with background synchronization, and a fully responsive cross-device UI. Successfully handled production deployment and release lifecycle management.',
      technologies: ['React Native', 'Sqlite', 'Tap to pay', 'DuitNow'],
      category: 'Mobile',
      featured: false,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.amilapp&hl=en_IN',
      appStoreLink: 'https://apps.apple.com/in/app/ezamil/id6757942775'
    },
    {
      title: 'Pawzy – Pet Services Booking & Social Community Platform',
      description: 'A scalable pet services marketplace and social platform enabling real-time booking, secure payments via Stripe, map-based provider tracking, and Instagram-inspired community engagement features.',
      technologies: ['React Native', 'Push Notifications', 'Stripe', 'Redux', 'Google Maps API', 'Socket.io', 'Firebase messaging', 'Real-time Location Tracking', 'Audio/Video Chat'],
      category: 'Mobile',
      featured: false,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.pawzy_mobile',
      appStoreLink: 'https://apps.apple.com/in/app/pawzy/id6743706680'
    },
    {
      title: 'Mazoom Invitation',
      description: 'A smart event management platform enabling automated invitations, real-time RSVP tracking, secure personalized entry code validation for check-ins, and integrated location sharing with navigation support.',
      technologies: ['React Native', 'Push Notifications', 'QR Code', 'Redux', 'Google Maps API'],
      category: 'Mobile',
      featured: false,
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.app.mazoom',
      appStoreLink: 'https://apps.apple.com/in/app/mazoom-invitations/id1604235156'
    },
    {
      title: 'Evicenna – A Complete Family Health Solution',
      description: 'A secure digital healthcare platform enabling real-time patient vitals visualization, encrypted medical device data sync, HIPAA-compliant role-based access, and integrated video consultations using VideoSDK for seamless remote care delivery.',
      technologies: ['React Native', 'Push Notifications', 'Responsive UI', 'Redux', 'Google Maps API', 'Healthcare Data Security', 'VideoSDK'],
      category: 'Mobile',
      featured: false,
      // playStoreLink: 'https://play.google.com/store/apps/details?id=com.app.mazoom',
      // appStoreLink: 'https://apps.apple.com/in/app/mazoom-invitations/id1604235156'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  const displayedOtherProjects = showAllOtherProjects ? otherProjects : otherProjects.slice(0, 3);
  const isMobileProject = (project) => project.category === 'Mobile';

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          A selection of projects showcasing my skills and experience
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <div key={index} className="project-card featured">
            <div className="project-badge">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {isMobileProject(project) ? (
                <>
                  {project.playStoreLink ? (
                    <a href={project.playStoreLink} className="project-link project-store-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-google-play"></i> Google Play Store
                    </a>
                  ) : (
                    <span className="project-link project-link-muted project-store-link">
                      <i className="fas fa-clock"></i> Google Play Soon
                    </span>
                  )}
                  {project.appStoreLink ? (
                    <a href={project.appStoreLink} className="project-link project-store-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-apple"></i> App Store
                    </a>
                  ) : (
                    <span className="project-link project-link-muted project-store-link">
                      <i className="fas fa-clock"></i> App Store Soon
                    </span>
                  )}
                </>
              ) : project.link ? (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              ) : (
                <span className="project-link project-link-muted">
                  <i className="fas fa-clock"></i> Link Coming Soon
                </span>
              )}
              {/* <span className="project-link project-link-muted">
                <i className="fab fa-github"></i> Code Available on Request
              </span> */}
            </div>
          </div>
        ))}
      </div>
      <div className="section-header section-header-compact">
        <h2 className="section-title">Other Projects</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid" id="other-projects">
        {displayedOtherProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-badge">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {isMobileProject(project) ? (
                <>
                  {project.playStoreLink ? (
                    <a href={project.playStoreLink} className="project-link project-store-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-google-play"></i> Google Play Store
                    </a>
                  ) : (
                    <span className="project-link project-link-muted project-store-link">
                      <i className="fas fa-clock"></i> Google Play Soon
                    </span>
                  )}
                  {project.appStoreLink ? (
                    <a href={project.appStoreLink} className="project-link project-store-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-apple"></i> App Store
                    </a>
                  ) : (
                    <span className="project-link project-link-muted project-store-link">
                      <i className="fas fa-clock"></i> App Store Soon
                    </span>
                  )}
                </>
              ) : project.link ? (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> View
                </a>
              ) : (
                <span className="project-link project-link-muted">
                  <i className="fas fa-clock"></i> Details Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {otherProjects.length > 3 && (
        <div className="more-projects-action">
          <button
            type="button"
            className="more-projects-btn"
            onClick={() => setShowAllOtherProjects((prev) => !prev)}
            aria-expanded={showAllOtherProjects}
            aria-controls="other-projects"
          >
            {showAllOtherProjects ? 'Show Less' : 'More Projects'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;


// 1. Easy home : https://easyhome.ca
// 2. Febi : https://febi.ai/
// 3. EY Fabric : https://fabric.ey.com
// 4. Solutionec : https://www.solutionec.com/
// 5. Sparkit : https://spaarkd.com
// 6. SkyBorneDrop : https://skybornedrop.com
