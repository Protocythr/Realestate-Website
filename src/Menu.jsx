import { MenuItem } from './MenuItem'

export function Menu(){
    return(
        <ul className="menu">
            <li className="menu-item one">
                <MenuItem txtColor="white" txt="PROPERTIES" link="./placeholder" />
            </li>
            <li className="menu-item two">
                <MenuItem txtColor="white" txt="ABOUT" link="./placeholder" />
            </li>
            <li className="menu-item three">
                <MenuItem txtColor="white" txt="CONTACT" link="./placeholder" />
            </li>
            <li className="menu-item four">
                <MenuItem txtColor="white" txt="BLOG" link="./placeholder" />
            </li>
        </ul>
    )
}