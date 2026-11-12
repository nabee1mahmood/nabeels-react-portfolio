import React from 'react';
import './hero.css';
import profile_img from '../../assets/IMG_5860 2.png';
import linkedin_img from '../../assets/icons8-linkedin-50 (1).png';
import github_img from '../../assets/icons8-github-150-BUvNxPtl.png';

const Hero = () => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="hero-eyebrow">Software Engineer <span className="eyebrow-divider">·</span> Samsung Semiconductor</p>
        <h1 id="hero-heading">Hi, I’m Nabeel.<br /><span>I like solving real problems with software.</span></h1>
        <p className="hero-intro">I’m a Computer Science graduate with experience across software, hardware, automation, and data. I’m especially interested in distributed systems, servers, AI infrastructure, and AI agents.</p>
        <div className="hero-action">
          <a className="hero-contact-link" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
          <a className="social-link" href="https://linkedin.com/in/nabeelmah" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_img} alt="" aria-hidden="true" className="social-icon" /> <span>LinkedIn</span>
          </a>
          <a className="social-link" href="https://github.com/nabee1mahmood" target="_blank" rel="noopener noreferrer">
            <img src={github_img} alt="" aria-hidden="true" className="social-icon" /> <span>GitHub</span>
          </a>
        </div>
        <a className="hero-scroll" href="#projects"><span>Explore my projects</span><span className="hero-scroll__line" aria-hidden="true" /></a>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img src={profile_img} alt="Nabeel Mahmood" className="hero-image" />
        </div>
        <p className="hero-image-caption">Nabeel Mahmood <span>·</span> Software Engineer</p>
      </div>
    </section>
  );
};

export default Hero;
