import { Footer } from "./Footer";
import { Slideshow } from "./Slideshow";

export function Frontpage() {
  return (
    <>
    <Slideshow />
    <div className="ftpg">
      <div className="profile-container">
      <div className="contact-header">
        <div className="headshot">
          <img className="headshotPicture" src="assets/headshot.jpg" alt="Winner McDonald"/>
        </div>
        <div className="contact-details">
          <h1>Winner McDonald</h1>
          <h2>William Raveis Real Estate</h2>
          <p className="description">Sales Associate - Milton Office</p>
          <p className="contact-info">95 Eliot Street, Milton, MA 02186</p>
          <p className="contact-info">
            <span className="contact-label">C:</span> 617.875.2868 | 
            <span className="contact-label"> O:</span> 617.322.3933
          </p>
          <p className="contact-info">
            <span className="contact-label">Email:</span> Winner.McDonald@raveis.com
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="card">
          <h2>Professional Specialty</h2>
          <div className="content">
            <p className="description">A powerhouse of strategy and grit, Winner combines razor-sharp marketing, expert negotiation, and relentless commitment to deliver seamless transactions. She dominates local and international markets, serving buyers, sellers, and investors with uncompromising excellence.</p>
          </div>
        </div>

        <div className="card">
          <h2>Key Achievements</h2>
          <div className="content">
            <ul className="achievement-list">
              <li><span className="year">2024:</span> President's Club - William Raveis ($7M+)</li>
              <li><span className="year">2013–2023:</span> Top Producer - Lauria Real Estate</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2>Areas Covered</h2>
          <div className="content">
            <p className="area-tag">Core Service Areas:</p>
            <div className="area-tags">
              <span>Milton</span>
              <span>Quincy</span>
              <span>Braintree</span>
              <span>Boston</span>
              <span>South Boston</span>
              <span>Dorchester</span>
              <span>South Shore</span>
            </div>
            <p className="additional-coverage">+ Nationwide & International via referral network</p>
          </div>
        </div>

        <div className="card">
          <h2>Why Work With Winner?</h2>
          <div className="content">
            <div className="benefit">
              <h3>Bilingual Fluency</h3>
              <p>Cantonese, Mandarin, English</p>
            </div>
            <div className="benefit">
              <h3>Community Commitment</h3>
              <ul>
                <li>Patient Navigator, South Shore Hospital</li>
                <li>Volunteer: Germantown YMCA, Quincy Housing Authority</li>
              </ul>
            </div>
            <div className="benefit">
              <h3>Credentials</h3>
              <ul>
                <li>MA Licensed Real Estate Agent (2013–Present)</li>
                <li>Member: NAR, MA/GBAR Realtors®</li>
                <li>BS in Accounting & Management - UMass Boston</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Featured Listings</h2>
          <div className="content">
            <div className="listing-placeholder">
              <p>Listings coming soon</p>
            </div>
          </div>
        </div>

        <div className="card team-section">
          <h2>Your Raveis Team</h2>
          <div className="content">
            <div className="team-cards">
              <div className="team-card">
                <h3>Kate Rockett</h3>
                <p className="role">Mortgage Loan Officer</p>
                <p className="credential">NMLS #1500191</p>
                <p className="contact">617.281.4872</p>
                <button className="email-btn">Email Kate</button>
              </div>
              <div className="team-card">
                <h3>Joel Fanjoy</h3>
                <p className="role">Insurance Representative</p>
                <p className="contact">617.320.5687</p>
                <button className="email-btn">Email Joel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div> {/* Close .ftpg */}
      <Footer />
    </>
  );
}

