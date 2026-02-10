import React from 'react';
import './hero.css';
import profile_img from '../../assets/IMG_1636-S1dsObTJ.png';
import linkedin_img from '/Users/nabeelmahmood/nabeels-react-portfolio/src/assets/icons8-linkedin-50 (1).png';
import github_img from '../../assets/icons8-github-150-BUvNxPtl.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src={profile_img} alt='' style={{ width: '350px', height: '300px'}}/>

    <h1><span className="hover-effect">Hi, I'm Nabeel Mahmood</span></h1>

      <p> Senior Computer Science student at the University of Arkansas – Fort Smith, graduating Spring 2026. </p>
      <p>Welcome to my website! Here, you'll find an overview of my skills, education, and experiences that reflect my journey in the field of Computer Science so far.</p>
      <div className='hero-action'>
        <a href="https://linkedin.com/in/nabeelmah" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_img} alt="LinkedIn" className="social-icon large-icon hover-effect" />
        </a>
        <a href="https://github.com/nabee1mahmood" target="_blank" rel="noopener noreferrer">
          <img src={github_img} alt="GitHub" className="social-icon large-icon hover-effect" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
