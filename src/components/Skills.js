import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      skills: [
        { name: 'React Native', level: 95 },
        { name: 'iOS Development', level: 80 },
        { name: 'Android Development', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'Android Studio', level: 85 },
        { name: 'Xcode', level: 85 },
        { name: 'App Deployment', level: 90 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'fas fa-code',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript/ES6+', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 75 },
        // { name: 'MongoDB', level: 85 },
        // { name: 'PostgreSQL', level: 80 },
      ]
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'SQLite', level: 85 },
        { name: 'Redis', level: 75 },
        { name: 'Firebase Firestore', level: 85 },
      ]
    },
    {
      title: 'State Management',
      icon: 'fas fa-layer-group',
      skills: [
        { name: 'Redux', level: 90 },
        { name: 'Redux Toolkit', level: 90 },
        { name: 'Context API', level: 88 },
        { name: 'Zustand', level: 75 },
        { name: 'Recoil', level: 70 },
        { name: 'MobX', level: 70 },
        { name: 'Saga', level: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Bitbucket and GitLab', level: 90 },
        // { name: 'GitLab', level: 85 },
        { name: 'AWS and Docker', level: 75 },
        // { name: 'AWS', level: 70 },
        { name: 'Firebase', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Postman and Swagger', level: 85 },
        { name: 'Jira', level: 80 },
        { name: 'Slack and Notion', level: 85 },
        // { name: 'Swagger', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="skill-category-header">
              <i className={category.icon}></i>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
