import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Created by Jthemes.com</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Linkedin</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
