import React from 'react';
import '../assets/css/Footer.css';

function Footer() {
  return (
    <div class="footer-container">
      <div class="social-media">
        <div class="social-icons">
          <a href="#" class="link" target="_blank" aria-label="Facebook website">
            <i class="gg-facebook"></i>
            <span>Facebook</span>
          </a>
          <a href="#" class="link" target="_blank" aria-label="Instagram account of Yan's Feast">
            <i class="gg-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="#" class="link" target="_blank" aria-label="Twitter of Yan's Feast">
            <i class="gg-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="#" class="link" target="_blank" aria-label="YouTube account of Yan">
            <i class="gg-youtube"></i>
            <span>@YouTube</span>
          </a>
        </div>
      </div>
    </div>

  );
}

export default Footer;