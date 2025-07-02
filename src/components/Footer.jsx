import { Iconbar } from "./Iconbar";
import "./Footer.css";

export function Footer() {
  return (
    <>
    <footer className="ftr">
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li className="footer-name">Winner McDonald</li>
            <li className="footer-contact">
              <span>Call or Text:</span> 617.875.2868
            </li>
            <li className="footer-contact">
              <span>Email:</span> Winner.McDonald@raveis.com
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3 className="footer-heading">Office Location</h3>
          <ul className="footer-list">
            <li className="office-name">Milton Office</li>
            <li>95 Eliot Street</li>
            <li>Milton, MA 02186</li>
          </ul>
        </div>
        
        <div className="footer-column logo-column">
          <div className="logo-container">
            <img 
              src="./assets/wm-logo.svg" 
              alt="Winner McDonald Real Estate" 
              className="footer-logo"
            />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">©2025 William Raveis Real Estate. Equal Housing Opportunity.</p>
        
        <div className="footer-links">
          <ul className="footer-link-list">
            <li><a href="#" className="footer-link">ADA Compliant</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Agent Login</a></li>
          </ul>
          
          <div className="app-download">
            <h4 className="app-title">Download Our App</h4>
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <img src="./assets/app-store.svg" alt="App Store" />
              </a>
              <a href="#" className="app-btn">
                <img src="./assets/google-play.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </footer>
      <Iconbar />
    </>
  );
}