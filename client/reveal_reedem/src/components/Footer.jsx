import React from 'react';
import logo from '/logo.png'; // Ensure the logo image is in the public folder

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com" target="_blank"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="footer-info">
          <div className="d-flex justify-content-start align-items-center mb-2">
            <p>&copy; 2024 Copyright One. All rights reserved.</p>
          </div>
          <img src={logo} alt="Logo" width="30" height="24" className="me-2" />
          <p>Reveal & Redeem | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
