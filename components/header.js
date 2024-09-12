const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <style>
        .header-container{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 2px solid black;
        }
        .header-logo {
            flex: 0.3;
            padding-left: 60px;
        }
        
        .header-logo > a > img {
            width: 150px;
            height: auto;
        }
        
        .header-logo:visited {
            color: black;
            text-decoration: none;
        }
        
        .nav-container{
            flex: 1;
            display: flex;
            padding: 20px;
            justify-content: flex-end;
        }
        
        .sidebar-open-button {
            display: none;
            font-family: 'IBM Plex Mono', monospace;
            border: 2px black solid;
            width: 75px;
        }
        
        .sidebar-close-button {
            width: 100%;
            height: 30px;
            border: none;
            font-family: 'IBM Plex Mono', monospace;
        }
        
        .sidebar-close-button:hover {
            opacity: 50%;
            transition: 0.2s;
            cursor: pointer;
        }
        
        .sidebar-nav-selector {
            display: none;
            justify-content: flex-end;
            padding-right: 60px;
            flex: 1;
            border-bottom: 2px solid black;
        }
        
        .sidebar-nav-selector > ul {
            padding-left: 120px;
        }
        
        .sidebar-nav-selector > h3 {
            padding-left: 60px;
        }
        
        @media (max-width: 1000px) {
            .nav-container{
                display: none;
            }
            .header-logo {
                flex: 1;
                padding-left: 60px;
            }
            .sidebar-open-button{
                display: block;
                margin-right: 60px;
            }
        }
        
        .nav-selector {
            display: inline-block;
            padding-left: 25px;
            padding-right: 25px;
        }
        
        .nav-label {
            text-decoration: none;
            color: black;
            font-size: 25px;
        }
        
        .nav-selector:hover .dropdown-content {
            display: block;
            position: absolute;
        }
        
        .dropdown-content {
            display: none;
            background-color: white;
        }
        
        .dropdown-content > a {
            color: black;
            padding: 12px 16px;
            font-size: 16px;
            text-decoration: none;
            display: block;
            text-align: left;
        }
    </style>

    <header class="header-container">
        <div class="header-logo">
            <a href="/home.html"><img src="/images/logo.jpg"></a>
        </div>
        <nav class = "nav-container">
            <div class="nav-selector">
                <text class="nav-label">About Us</text>
                <div class="dropdown-content">
                    <a href="/eboard.html">E-Board</a>
                    <a href="/mission.html">Mission Statement</a>
                </div>
            </div>
            <div class="nav-selector">
                <text class="nav-label">Students<text>
                <div class="dropdown-content">
                    <a href="/signup.html">Sign Up</a>
                </div>
            </div>
            <div class="nav-selector">
                <text class="nav-label">Events<text>
                <div class="dropdown-content">
                    <a href="/events.html">Events</a>
                </div>
            </div>
            <div class="nav-selector">
                <text class="nav-label">Contact Us<text>
                <div class="dropdown-content">
                    <a href="/contact.html">Contact</a>
                </div>
            </div>
        </nav>
        <button id="sidebar-open-button" class="sidebar-open-button" 
            onclick="">Menu
        </button>
    </header>

    <nav class = "sidebar-nav-container">
        <div id="sidebar" class="sidebar-nav-selector">
            <button id="sidebar-close-button" class="sidebar-close-button" 
                onclick=""> Close &times;
            </button>
            <h3>About Us</h3>
            <ul>
                <a href="/eboard.html">E-Board</a><br>
                <a href="/mission.html">Mission Statement</a>
            </ul>
            <h3>Students</h3>
            <ul>
                <a href="/signup.html">Sign Up</a>
            </ul>
            <h3>Events</h3>
            <ul>
                <a href="/events.html">Events</a>
            </ul>
            <h3>Contact Us</h3>
            <ul>
                <a href="/contact.html">Contact</a>
            </ul>
        </div>
    </nav>
`;

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(headerTemplate.content);

        const sidebarOpenButton = shadowRoot.getElementById("sidebar-open-button");
        const sidebarCloseButton = shadowRoot.getElementById("sidebar-close-button");
        const sidebar = shadowRoot.getElementById("sidebar");

        sidebarOpenButton.addEventListener("click", () => {
            sidebar.style.width = "100%";
            sidebar.style.display = "block";
            sidebarOpenButton.style.display = "none";
        });

        sidebarCloseButton.addEventListener("click", () => {
            sidebar.style.display = "none";
            sidebarOpenButton.style.display = "block";
        });
    }
}

customElements.define('header-component', HeaderComponent);
  