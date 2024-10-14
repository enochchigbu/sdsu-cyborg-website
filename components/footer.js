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

      .rounded-social-buttons {
          text-align: center;
          padding: 30px;
      }

      .rounded-social-buttons .social-button {
          display: inline-block;
          position: relative;
          cursor: pointer;
          width: 50px;
          height: 50px;
          border: 0.125rem solid transparent;
          text-decoration: none;
          text-align: center;
          border-radius: 50%;
          margin-right: 0.25rem;
          margin-bottom: 0.25rem;
          transition: all 0.5s ease;
          background: #ffffff; /* Ensure a background is applied */
      }

      .rounded-social-buttons .social-button img {
          width: 60%;  /* Image fits within the rounded button */
          height: 60%; /* Maintain the aspect ratio */
          border-radius: 30%; /* Circular effect */
          margin-top: 20%; /* Centers the image */
      }

      .rounded-social-buttons .social-button:hover,
      .rounded-social-buttons .social-button:focus {
          transform: rotate(360deg);
      }

      .rounded-social-buttons .social-button.twitter {
          background: #55acee;
      }

      .rounded-social-buttons .social-button.linkedin {
          background: #007bb5;
      }

      .rounded-social-buttons .social-button.instagram {
          background: #125688;
      }
    </style>
    
    <footer class="footer-container">
        <div class="footer-text">
            <p>Contact us!</p>
            <p>Please don't hesitate to reach out at <strong>cyborgsdsu@gmail.com</strong></p>
        </div>
        <div class="rounded-social-buttons">
            <a class="social-button twitter" href="https://discord.gg/xFaME6Yv3V" target="_blank">
                <img src="../images/discord_logo.png" alt="Discord Logo">
            </a>
            <a class="social-button linkedin" href="https://www.linkedin.com/company/cyborg-at-sdsu" target="_blank">
                <img src="../images/linkedin_logo.png" alt="LinkedIn Logo">
            </a>
            <a class="social-button instagram" href="https://www.instagram.com/cyborgsdsu" target="_blank">
                <img src="../images/Instagram_Glyph_Black.png" alt="Instagram Logo">
            </a>
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
  