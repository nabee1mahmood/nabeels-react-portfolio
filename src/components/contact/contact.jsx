import React from 'react'
import './contact.css'
import github_icon from '../../assets/icons8-github-150-BUvNxPtl.png';
import linkedin_icon from '/Users/nabeelmahmood/nabeels-react-portfolio/src/assets/icons8-linkedin-50 (1).png'
import phone_icon from '/Users/nabeelmahmood/nabeels-react-portfolio/src/assets/icons8-email-50 (2).png'
import email_icon from '/Users/nabeelmahmood/nabeels-react-portfolio/src/assets/icons8-email-50 (2).png'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "4bc0be94-455e-424e-aaf2-b1d23ba88750");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
        if (res.success) {
          alert(res.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Reach out anytime! Feel free to reach out via email or connect with me on social media.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <div className="icon-container">
                                <img src={email_icon} alt="" className="contact-icon" />
                            </div>
                            <p className="contact-text email">nabeelmah1738@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <div className="icon-container">
                               <img src={phone_icon} alt="" className="contact-icon" />
                            </div>
                            <p className="contact-text phone">479-462-6780</p>
                        </div>
                        <div className="contact-detail">
                            <div className="icon-container">
                                 <img src={linkedin_icon} alt="" className="contact-icon" />
                            </div>
                            <p className="contact-text linkedin">linkedin.com/in/nabeelmah</p>
                        </div>
                        <div className="contact-detail">
                            <div className="icon-container">
                               <img src={github_icon} alt="" className="contact-icon" />
                            </div>
                            <p className="contact-text github">github.com/nabee1mahmood</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Please enter your name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="email">Please enter your email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name='message' rows="8" placeholder='Please enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
            <footer className="footer">
                <p>&copy; Nabeel Mahmood - All rights reserved </p>
            </footer>
        </div>
    );
}

export default Contact;
