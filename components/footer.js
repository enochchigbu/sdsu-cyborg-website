footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
      .footer-container {
        background-color: rgb(6, 6, 6);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #15191a;
      }
    
      .footer-text {
          color: white;
      }
      
      .footer-text h3 {
          font-size: 25px; /* Adjust the font size as needed */
          font-weight: bold;
      }
      
      .svg-inline--fa {
          vertical-align: -0.2em;
      }
      
      .rounded-social-buttons {
          text-align: center;
          padding: 30px;
      }
      
      .rounded-social-buttons .social-button {
          display: inline-block;
          position: relative;
          cursor: pointer;
          width: 3.125rem;
          height: 3.125rem;
          border: 0.125rem solid transparent;
          padding: 0;
          text-decoration: none;
          text-align: center;
          color: #fefefe;
          font-size: 1.5625rem;
          font-weight: normal;
          line-height: 2em;
          border-radius: 1.6875rem;
          transition: all 0.5s ease;
          margin-right: 0.25rem;
          margin-bottom: 0.25rem;
      }
      
      .rounded-social-buttons .social-button:hover,
      .rounded-social-buttons .social-button:focus {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
      }
      
      .rounded-social-buttons 
      .fa-slack,
      .fa-linkedin,
      .fa-instagram {
          font-size: 30px;
      }
      
      
      .rounded-social-buttons .social-button.twitter {
          background: #55acee;
      }
      
      .rounded-social-buttons .social-button.twitter:hover,
      .rounded-social-buttons .social-button.twitter:focus {
          color: #55acee;
          background: #000000;
          border-color: #55acee;
      }
      
      .rounded-social-buttons .social-button.linkedin {
          background: #007bb5;
      }
      
      .rounded-social-buttons .social-button.linkedin:hover,
      .rounded-social-buttons .social-button.linkedin:focus {
          color: #007bb5;
          background: #000000;
          border-color: #007bb5;
      }
      
      
      .rounded-social-buttons .social-button.instagram {
          background: #125688;
      }
      
      .rounded-social-buttons .social-button.instagram:hover,
      .rounded-social-buttons .social-button.instagram:focus {
          color: #125688;
          background: #000000;
          border-color: #125688;
      }
    </style>
  
   <footer class="footer-container">
        <div class="footer-text">
            <p>Contact us!</p>
            <p>Please don't hesitate to reach out at <strong>cyborgsdsu@gmail.com</strong></p>
        </div>
        <div class="rounded-social-buttons">
            <a class="social-button twitter" href="https://discord.gg/xFaME6Yv3V" target="_blank"><i class="fab fa-discord"></i></a>
            <a class="social-button linkedin" href="https://www.linkedin.com/company/cyborg-at-sdsu" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a class="social-button instagram" href="https://www.instagram.com/cyborgsdsu" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
    </footer>
`;

class FooterComponent extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', FooterComponent);
  