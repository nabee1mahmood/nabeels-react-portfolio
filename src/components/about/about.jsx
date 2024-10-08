import React from 'react';
import './about.css';
 import profile_img from '/Users/nabeelmahmood/nabeels-portfolio-react/src/assets/IMG_1778.png';  // Use relative paths



const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me </h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            
            <div className="about-section">
                <div className="about-left">
                <div className="image-container">
                <img src={profile_img} alt="Profile Image" className="profile-image" style={{ width: '350px', height: 'auto' }} />

                </div>
                
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                        I am currently studying Computer Science at the University of Arkansas - Fort Smith, with a concentration in Data Science and Artificial Intelligence. As a Pakistani American, I am deeply passionate about machine learning and constantly seek to expand my knowledge in cutting-edge technologies. My academic journey has provided me with a strong foundation in data structures, databases, and algorithms, fueling my enthusiasm for exploring advancements in AI and data science.
                        </p>
                        <p>
                            I find myself engrossed in the dynamic realm of artificial intelligence, where algorithms can come to life. Whether it's optimizing code or exploring the potential of new ideas,
                            I'm always eager to unravel the next challenges in this ever-evolving tech field.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Python</p><hr style={{ width: '50%' }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: '85%' }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: '65%' }} /></div>
                        <div className="about-skill"><p>C++</p><hr style={{ width: '40%' }} /></div>
                        <div className="about-skill"><p>R</p><hr style={{ width: '55%' }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
      <div className="about-achievement">
        <h1>3.47 GPA</h1>
        <p>OVERALL GPA</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>5</h1>
        <p>PROGRAMMING LANGUAGES</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>3</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>20+</h1>
        <p>COURSES TAKEN</p>
      </div>
    </div>
    </div>
  );
};

export default About;
