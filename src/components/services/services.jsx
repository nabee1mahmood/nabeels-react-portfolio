import React from 'react';
import './services.css';

const Services = () => {
    return (
        <div id='experience' className='services'>
            <div className="services-title">
                <h1>Professional Experience</h1>
                <div className="services-containers">
                    <div className='services-format'>
                        <h2>Experience</h2>
                         <h3>Automated Test Engineering Co-op</h3>
                       <h4 style={{ color: "#ff0015ff" }}>Molex</h4>
                        <p>August 2025 - Present</p>
                        <ul>
                            <li>Plan, develop, and implement automated tests for high-speed cable assemblies, performing bit error rate and connectivity testing to ensure accurate and reliable signal performance.</li>
                            <li>Engineered Python scripts to automate extraction, organization, and compression of 500,000+ failed bypass cable test files across 10,000+ serial numbers, reducing manual data handling from 20+ hours to under 4 hours per batch</li>
                            <li>Used Confluence and Jira to track project progress, manage tasks, and maintain up-to-date documentation </li>
                        </ul>

                          <h3>Research Assistant</h3>
                       <h4 style={{ color: "#334e9dff" }}>University of Arkansas - Fort Smith</h4>
                        <p>July 2025 - December 2025</p>
                        <ul>
                            <li>Supported a $17,168 faculty-led research project evaluating transportation access and satisfaction among seniors (65+) in Fort Smith.</li>
                            <li>Collected and analyzed survey data from 100+ seniors across hospitals, libraries, clinics, and public facilities.</li>
                        </ul>
                        <p>This is an example of the QR code survey I created:</p>
                        <p>
                          <a href="https://forms.office.com/Pages/ShareFormPage.aspx?id=TUi1FgcihkO6sXmbZn9ANFOB08pfqKtBgyGWqXk3rYZUMDE1M0RQT0RGTDhUQ0NaVTg2U0ZDMFJSUy4u&sharetoken=JKIlRwOcEs2r66x00C7g" target="_blank" rel="noopener noreferrer" style={{ color: "#fffb00ff", textDecoration: "underline", fontWeight: "bold" }}>View Survey</a>
                        </p>

                        <h3>IoT Engineering Intern</h3>
                        <h4 style={{ color: "red" }}>ABB</h4>
                        <p>December 2023 - August 2024</p>
                        <ul>
                        <li>Was assigned the lead on the Paint Oven Project to integrate real-time data from a paint oven into ThingWorx, capturing crucial metrics such as relative humidity (maintained at optimal levels between <span style={{ color: 'red' }}>40-60%</span> for paint curing), temperature (controlled within a range of <span style={{ color: 'red' }}>70-90°F</span> for efficient curing and quality), and oven run time (monitored and optimized to reduce energy consumption by <span style={{ color: 'red' }}>20%</span>).</li>
                            <li>Created real-time IoT dashboards using ThingWorx and JavaScript which contribute to data-driven decision-making and process optimization efforts within the organization.</li>
                            <li>Managed database operations using SQL, including insertion of new employee data, table updates, and user escalations, ensuring the smooth functioning of enterprise business applications.</li>
                            <li>Oversaw all database tables, including updating the employment status of former employees, to guarantee the integrity and correctness of the data.</li>
                        </ul>
                        <h3>IT Intern</h3>
                        <h4 style={{ color: "red" }}>ABB</h4>
                        <p>May 2023 - December 2023</p>
                        <ul>
                            <li>Provided first-level contact and problem resolution for all users with hardware, software, and network issues in a diverse user environment.</li>
                            <li>Worked with team members in troubleshooting and performed root-cause analysis for resolving problems that had multiple dependencies.</li>
                            <li>Replaced 50+ time clocks across the plant and corporate offices, ensuring efficient installation and network connectivity.</li>
                            <li>Troubleshooted any IT issues in the establishment and solved problems with problem-solving skills and critical thinking.</li>
                            <li>Enhanced communication skills by meeting with senior professionals and learning from experienced individuals.</li>
                        </ul>
                    </div>
                    <div className='services-format'>
                        <h2>Education</h2>
                        <h3 className="large-heading">University of Arkansas - Fort Smith</h3>
                        <h4>Bachelor of Science in Computer Science</h4>
                        <h4>Minor: Mathematics</h4>
                        <br />
                        <h3>Relevant Coursework:</h3>
                        <ul>
                            <li>Data Structures, Artificial Intelligence, Software Engineering, Database Systems, Applied Regression Analysis, Distributed Systems, Formal Languages, Natural Language Processing, Algorithms, Computer Architecture, Operating Systems, Discrete Mathematics I, II, Applied Linear Algebra, Foundations of Programming I, II</li>
                        </ul>
                    </div>
                    <div className='services-format'>
                        <h2>Skills</h2>
                        <h3>Programming Languages: </h3>
                        <li>Java, Python, R, JavaScript, SQL, C#</li>
                        <br />
                        <h3>Operating Systems: </h3>
                        <li>Windows, Linux: Ubuntu, Debian, Tumbleweed, MacOS</li>
                        <br />
                        <h3>Database Systems:</h3>
                        <li>DB2, Microsoft SQL Server, MySQL / MariaDB, CouchDB (NoSQL)</li>
                        <br />
                        <h3>Productivity & Business Tools:</h3>
                        <div className="tool-section">
                                <h4>Google Workspace:</h4>
                                <ul className="tool-list">
                                    <li>Docs, Sheets, Slides, Gmail, Forms, Calendar, Meet, Drive</li>
                                </ul>
                                <h4>Microsoft Office Suite:</h4>
                                <ul className="tool-list">
                                    <li>Word, Excel, PowerPoint, Outlook, Teams, Forms</li>
                                </ul>
                        </div>
                        <h3>Certificates</h3>
                        <li>Google Data Analytics Certificate</li>
                        <li>AT&T Technology Academy 2025</li>
                        <br />
                        <h3>Soft Skills</h3>
                        <li>Problem-Solving Skills, Critical Thinking, Efficient, Communication, Teamwork</li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
