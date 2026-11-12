import React, { useState } from 'react'
import './contact.css'
import github_icon from '../../assets/icons8-github-150-BUvNxPtl.png';
import linkedin_icon from '../../assets/icons8-linkedin-50 (1).png'
import phone_icon from '../../assets/icons8-phone-number-50 (2).png'
import email_icon from '../../assets/icons8-email-50 (2).png'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        try {
          const formData = new FormData(event.target);
          formData.append("access_key", "4bc0be94-455e-424e-aaf2-b1d23ba88750");
          const object = Object.fromEntries(formData);
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(object)
          });
          const result = await response.json();
          if (!response.ok || !result.success) {
            throw new Error(result.message || 'Your message could not be sent. Please try again.');
          }
          setSubmitMessage(result.message || 'Thanks — your message has been sent.');
          event.target.reset();
        } catch (error) {
          setSubmitMessage(error.message || 'Your message could not be sent. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
    };

    return (
        <section id='contact' className='contact' aria-labelledby="contact-heading">
            <div className="contact-title">
                <p className="section-kicker">The next good thing starts here <span>04 / 04</span></p>
                <h1 id="contact-heading">Have a problem<br /><span>worth solving?</span></h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h2>Let’s make it happen.</h2>
                    <p>Have a project, opportunity, or interesting problem in mind? I’d be glad to hear about it.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <div className="icon-container">
                                <img src={email_icon} alt="" className="contact-icon" />
                            </div>
                            <a className="contact-text email" href="mailto:nabeelmah1738@gmail.com">nabeelmah1738@gmail.com</a>
                        </div>
                        <div className="contact-detail">
                            <div className="icon-container">
                               <img src={phone_icon} alt="" className="contact-icon" />
                            </div>
                            <a className="contact-text phone" href="tel:+14794626780">479-462-6780</a>
                        </div>
                        <div className="contact-detail">
                            <div className="icon-container">
                                 <img src={linkedin_icon} alt="" className="contact-icon" />
                            </div>
                            <a className="contact-text linkedin" href="https://linkedin.com/in/nabeelmah" target="_blank" rel="noopener noreferrer">linkedin.com/in/nabeelmah</a>
                        </div>
                        <div className="contact-detail">
                            <div className="icon-container">
                               <img src={github_icon} alt="" className="contact-icon" />
                            </div>
                            <a className="contact-text github" href="https://github.com/nabee1mahmood" target="_blank" rel="noopener noreferrer">github.com/nabee1mahmood</a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" placeholder='Enter your name' name='name' autoComplete="name" required />
                    <label htmlFor="email">Your email</label>
                    <input id="email" type="email" placeholder='Enter your email' name='email' autoComplete="email" required />
                    <label htmlFor="message">What would you like to talk about?</label>
                    <textarea id="message" name='message' rows="6" placeholder='Please enter your message' required></textarea>
                    <button type='submit' className="contact-submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'}</button>
                    <p className="contact-status" role="status" aria-live="polite">{submitMessage}</p>
                </form>
            </div>
            <footer className="footer">
                <p>&copy; Nabeel Mahmood - All rights reserved </p>
            </footer>
        </section>
    );
}

export default Contact;
