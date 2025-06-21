import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export function Iconbar() {
  return (
    <ul style={{
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '0px',
      gap: '20px',
      padding: '10px',
      backgroundColor: 'black',
      justifyContent: 'left',
      listStyle: 'none',
      margin: 0,
    }}>
      {[{ icon: faFacebook, color: '#4267B2', href: 'https://facebook.com' },
        { icon: faInstagram, color: '#E1306C', href: 'https://instagram.com' },
        { icon: faTwitter, color: '#1DA1F2', href: 'https://twitter.com' },
        { icon: faLinkedin, color: '#0077B5', href: 'https://linkedin.com' },
      ].map((item, index) => (
        <li key={index} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
        }}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} size="2x" color={item.color} />
          </a>
        </li>
      ))}
    </ul>
  );
}