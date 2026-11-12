import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div id="experience" className="services">
      <header className="services-header section-heading">
        <p className="section-kicker">The path so far <span>02 / 04</span></p>
        <h1>Professional Experience</h1>

      </header>

      <div className="services-layout">
        {/* Experience — timeline / stacked cards */}
        <section className="experience-panel" aria-labelledby="exp-heading">
          <h2 id="exp-heading" className="panel-title">Experience</h2>



              <article className="role-card">
            <div className="role-card__header">
              <div>
              <h3 className="role-card__title">Software Engineer</h3>
                <p className="role-card__company">Samsung Semiconductor</p>
              </div>
              <span className="role-card__dates">Jun 2026 – Present</span>
            </div>
            <ul className="role-card__list">
              <li>
                Own development and implementation of a <strong>Samsung RFID inventory tracking system</strong>, integrating <strong>SQL Server</strong> and RFID software with <strong>20+ scanners</strong> to track <strong>10,000+ items</strong> while coordinating <strong>3 vendors</strong>.
              </li>
              <li>
                Automate reporting across <strong>5+ manufacturing departments</strong> using <strong>Python</strong>, <strong>Jira and Confluence REST APIs</strong>, and internal databases. Scheduled email reports reach <strong>100+ recipients</strong> and save <strong>10+ hours per week</strong>.
              </li>
              <li>
                Develop full-stack applications for <strong>200+ engineers</strong> using <strong>React, FastAPI, and PostgreSQL</strong>. Use <strong>OpenCode and open-source AI coding agents</strong> for code generation, review, and debugging, with <strong>GitLab CI/CD</strong> for automated testing.
              </li>

            </ul>
          </article>







          <article className="role-card">
            <div className="role-card__header">
              <div>
                <h3 className="role-card__title">Automated Test Engineering Co-Op</h3>
                <p className="role-card__company">Molex</p>
              </div>
              <span className="role-card__dates">Aug 2025 – May 2026</span>
            </div>
            <ul className="role-card__list">
              <li>
                Reduced cable testing costs by <strong>40%</strong> by designing a <strong>Raspberry Pi</strong>–based thermal sensing system using an <strong>MLX90640 infrared camera</strong>, replacing thermocouples and performing statistical analysis for data center cable validation.
              </li>
              <li>
                Cut manual data processing time from <strong>20+ hours</strong> to under <strong>4 hours per batch</strong> (<strong>57% efficiency gain</strong>) by engineering <strong>Python automation scripts</strong> to process <strong>500,000+</strong> cable test files.
              </li>
            </ul>
          </article>

          <article className="role-card">
            <div className="role-card__header">
              <div>
                <h3 className="role-card__title">Research Assistant</h3>
                <p className="role-card__company">University of Arkansas – Fort Smith</p>
              </div>
              <span className="role-card__dates">Jul 2025 – Dec 2025</span>
            </div>
            <ul className="role-card__list">
              <li>
                Supported a <strong>$17,168 funded research grant</strong> by designing surveys and collecting data from <strong>100+ seniors across 3 hospitals and 5 senior centers</strong> to evaluate transportation accessibility and awareness.
              </li>
              <li>
                Identified accessibility gaps affecting <strong>80% of respondents</strong> by cleaning and analyzing survey data using <strong>data analysis tools</strong> and statistical methods, producing data-driven recommendations.
              </li>
            </ul>
            <p className="role-card__link">
              <a
                href="https://forms.office.com/Pages/ShareFormPage.aspx?id=TUi1FgcihkO6sXmbZn9ANFOB08pfqKtBgyGWqXk3rYZUMDE1M0RQT0RGTDhUQ0NaVTg2U0ZDMFJSUy4u&sharetoken=JKIlRwOcEs2r66x00C7g"
                target="_blank"
                rel="noopener noreferrer"
              >
                View survey (example)
              </a>
            </p>
          </article>

          <article className="role-card">
            <div className="role-card__header">
              <div>
                <h3 className="role-card__title">IoT Engineering Intern</h3>
                <p className="role-card__company">ABB</p>
              </div>
              <span className="role-card__dates">Dec 2023 – Aug 2024</span>
            </div>
            <ul className="role-card__list">
              <li>
                Increased real-time sensor tracking accuracy by <strong>30%</strong> across <strong>100+ industrial motor units</strong> by debugging <strong>ThingWorx IoT dashboards</strong> and resolving <strong>50+ hardware-software integration and telemetry issues</strong>.
              </li>
              <li>
                Supported <strong>enterprise-scale data operations</strong> for <strong>1,000+ employees</strong> by managing <strong>Microsoft SQL Server</strong> systems and writing optimized queries across <strong>100+ tables</strong> for automated reporting workflows.
              </li>
            </ul>
          </article>

          <article className="role-card">
            <div className="role-card__header">
              <div>
                <h3 className="role-card__title">IT Intern</h3>
                <p className="role-card__company">ABB</p>
              </div>
              <span className="role-card__dates">May 2023 – Dec 2023</span>
            </div>
            <ul className="role-card__list">
              <li>
                Provided <strong>tier-1 IT</strong> support for <strong>4+</strong> departments, resolving <strong>50+</strong> hardware, software, server, and network systems issues.
              </li>
              <li>
                Diagnosed and resolved root causes of recurring system failures, reducing repeated support tickets by <strong>20%</strong>.
              </li>
            </ul>
          </article>
        </section>

        <aside className="services-sidebar">
          <section className="info-card" aria-labelledby="edu-heading">
            <h2 id="edu-heading" className="panel-title">Education</h2>
            <h3 className="info-card__school">University of Arkansas – Fort Smith</h3>
            <p className="info-card__degree">B.S. Computer Science · Minor: Mathematics</p>
            <br></br>
            <p className="info-card__label">Relevant Coursework:</p>
            <p className="info-card__courses">
              Data Structures, AI, Software Engineering, Database Systems, Distributed Systems, NLP, Algorithms, Operating Systems, Computer Architecture, Formal Languages, Applied Regression Analysis, Discrete Mathematics, Linear Algebra, Programming I–II
            </p>

            <br></br>
            <p className="info-card__label">Leadership</p>
            <h4 className="info-card__leadership-role">Desi Culture Club - President</h4>
            <ul className="role-card__list info-card__leadership-list">
              <li>
                Lead weekly planning meetings with <strong>10+</strong> members, delegate tasks, and oversee{' '}
                <strong>3+</strong> events each semester, fostering leadership opportunities and building campus
                engagement.
              </li>
              <li>
                Plan and organize cultural events celebrating South Asian heritage, boosting student participation and
                campus engagement.
              </li>
            </ul>
          </section>

          <section className="info-card" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="panel-title">Skills</h2>
            <div className="skill-group">
              <span className="skill-group__label">Languages</span>
              <p className="skill-group__text">Python, SQL, Java, JavaScript</p>
            </div>
            <div className="skill-group">
              <span className="skill-group__label">Frameworks &amp; libraries</span>
              <p className="skill-group__text">FastAPI, React, Node.js, pandas, NumPy, Matplotlib</p>
            </div>
            <div className="skill-group">
              <span className="skill-group__label">Databases</span>
              <p className="skill-group__text">PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, CouchDB</p>
            </div>
            <div className="skill-group">
              <span className="skill-group__label">AI development tools</span>
              <p className="skill-group__text">OpenCode, OpenAI Codex, Cursor, GitHub Copilot</p>
            </div>
            <div className="skill-group">
              <span className="skill-group__label">Tools &amp; systems</span>
              <p className="skill-group__text">Git, GitLab CI/CD, Docker, Linux/UNIX, NGINX, Jira, Confluence</p>
            </div>
            <div className="skill-group">
              <span className="skill-group__label">Concepts</span>
              <p className="skill-group__text">CI/CD, REST APIs, Test Automation, Distributed Systems, Hardware-Software Integration, Agile/Scrum</p>
            </div>
            <div className="skill-group">
              <span className="skill-group__label">Certificates</span>
              <p className="skill-group__text">Google Data Analytics · AT&amp;T Technology Academy 2025</p>
            </div>


          </section>
        </aside>
      </div>
    </div>

  );
};

export default Services;
