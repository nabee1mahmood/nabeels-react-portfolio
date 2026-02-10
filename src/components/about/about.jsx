import React from 'react';
import './about.css';
import profile_img from '../../assets/IMG_1778-Bn6B6vU9.png';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me </h1>
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
                        I am currently a senior studying Computer Science at the University of Arkansas – Fort Smith, and I will be graduating in May 2026.
                        Throughout my courses, internship, and projects, I have developed experience across software development, hardware systems,
                        data science, distributed systems, and algorithmic problem-solving. These experiences have taught me how to be a well-rounded computer scientist
                        with a strong eagerness to learn, the ability to work well with others, and the capability to handle projects effectively. I am excited to contribute
                        my skills to real-world projects and continue to grow in this ever evolving tech field!
                        </p>
                    </div>
                    <div className="about-skills">
                      <div className="about-skill"><p>Java</p><hr style={{ width: '68%' }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: '65%' }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: '61%' }} /></div>
                        <div className="about-skill"><p>R</p><hr style={{ width: '55%' }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
      <div className="about-achievement">
  <h1>3.26/4.00</h1>
  <p>OVERALL GPA</p>
</div>
      <hr />
      <div className="about-achievement">
        <h1>4+</h1>
        <p>PROGRAMMING LANGUAGES</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>5+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>35+</h1>
        <p>COURSES TAKEN</p>
      </div>
    </div>
    <br>
    </br>
    <br>
    </br>
    <br></br>
    </div>

  );
};

export default About;
