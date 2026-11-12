import React from 'react';
import './about.css';
import profile_img from '../../assets/IMG_1778-Bn6B6vU9.png';

const languageSkills = [
  { name: 'Python', value: 70, strongest: true },
  { name: 'Java', value: 68 },
  { name: 'SQL', value: 65 },
  { name: 'JavaScript', value: 61 },
  { name: 'R', value: 55 },
];

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <header className="section-heading about-title">
        <p className="section-kicker">A little about me <span>01 / 04</span></p>
        <h2 id="about-heading">About me</h2>
      </header>

      <div className="about-section">
        <div className="about-left">
          <div className="image-container">
            <img src={profile_img} alt="Nabeel Mahmood outdoors" className="profile-image" loading="lazy" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I recently graduated with a bachelor’s degree in Computer Science and now work as a Software Engineer at Samsung Semiconductor. My coursework, internships, and projects have given me experience in software development, hardware systems, data science, distributed systems, and algorithmic problem-solving.</p>
            <p>These experiences have helped me become a well-rounded computer scientist. I enjoy learning, working with others, and taking projects from idea to implementation.</p>
            <p>At Samsung, I build Python automation and server-side applications with FastAPI and PostgreSQL. I also use an AI agent for code generation, then review, test, and validate the output.</p>
            <p>I’m especially interested in going deeper into distributed systems, servers, AI infrastructure, and AI agents. I’m excited to keep learning and contribute to real-world projects.</p>
          </div>

          <section className="language-skills" aria-labelledby="language-skills-heading">
            <div className="language-skills__heading">
              <h3 id="language-skills-heading">Programming languages</h3>
              <span>Relative experience</span>
            </div>
            <div className="language-skill-list">
              {languageSkills.map(({ name, value, strongest }) => (
                <div className={`language-skill${strongest ? ' language-skill--strongest' : ''}`} key={name}>
                  <div className="language-skill__label">
                    <span>{name}</span>
                    {strongest && <span className="language-skill__badge">Strongest</span>}
                  </div>
                  <div className="language-skill__meter" role="meter" aria-label={`${name} relative experience`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={value}>
                    <span style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="about-achievements" role="group" aria-label="Education and project highlights">
        <div className="about-achievement"><h3>3.26<span>/4.00</span></h3><p>Overall GPA</p></div>
        <div className="about-achievement"><h3>15<span>+</span></h3><p>Technologies used</p></div>
        <div className="about-achievement"><h3>10<span>+</span></h3><p>Projects completed</p></div>
        <div className="about-achievement"><h3>35<span>+</span></h3><p>Courses taken</p></div>
      </div>
    </section>
  );
};

export default About;
