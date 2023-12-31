import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';



const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn" >
      <p>Request Early Access</p>
    </div>

    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <h3>Overons</h3>
        <h3>Social Media</h3>
        <h3>Counters</h3>
        <h3>Contact</h3>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Company</h4>
        <h3>Terms & Conditions</h3>
        <h3>Privacy Policy</h3>
        <h3>Contact</h3>
        
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Get in touch</h4>
        <h3>Crechterwoord K12 182 DK Alknjkcb</h3>
        <h3>085-132567</h3>
        <h3>info@payme.net</h3>
      </div>
    </div>
    <div className='gpt3__footer-copyright'>
      <p>© 2021 GPT-3. All rights reserved.</p>
       </div>

    </div>
  )
}

export default Footer
