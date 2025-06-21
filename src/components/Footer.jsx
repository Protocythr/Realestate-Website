import { Iconbar } from "./Iconbar"
import "./Footer.css"

export function Footer(){
    return (
        <div className="ftr">
            <ul style={{
                float: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '10px',
                backgroundColor: 'red',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                listStyle: 'none',
                margin: 0,
                width: '50%',
            }}>
                <li>
                    <a>Contact Us</a>
                </li>
                <li>
                    <a>Winner Mcdonald</a>
                </li>
                <li>
                    <a>Call or Text</a>
                </li>
                <li>
                    <a>617.875.2868</a>
                </li>
                <li>
                    <a>Winner.McDonald@raveis.com</a>
                </li>
            </ul>
            <ul style={{
                float: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                padding: '10px',
                backgroundColor: 'blue',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                listStyle: 'none',
                margin: 0,
                width: '50%',
            }}>
                <li>
                    <a>Milton Office</a>
                </li>
                <li>
                    <a> </a>
                </li>
                <li>
                    <a>95 Eliot Street,</a>
                </li>
                <li>
                    <a>Milton, MA 02186</a>
                </li>
            </ul>
            <ul className="wmc_logo">
                <li>
                    <img src="./assets/placeholder.svg" alt="./assets/placeholder.svg"/>
                </li>
            </ul>
            <Iconbar/>
        </div>
    )
}