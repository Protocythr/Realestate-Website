import { MenuItem } from './MenuItem'

export function Menu({ visible }) {
    return (
      <ul className={`menu ${visible ? 'visible' : ''}`}>
        <li className="menu-item one">
          <MenuItem txtColor="white" txt="PROPERTIES" link="./properties.html" />
        </li>
        <li className="menu-item two">
          <MenuItem txtColor="white" txt="ABOUT" link="./placeholder" />
        </li>
        <li className="menu-item three">
          <MenuItem txtColor="white" txt="CONTACT" link="./placeholder" />
        </li>
        <li className="menu-item four">
          <MenuItem txtColor="white" txt="SOCIALS" link="./placeholder" />
        </li>
      </ul>
    );
  }  