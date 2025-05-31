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
                    <a>888.888.8888</a>
                </li>
                <li>
                    <a>placeholder@gmail.com</a>
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
                    <a>Address</a>
                </li>
                <li>
                    <a> </a>
                </li>
                <li>
                    <a>300 Somewhere Dr, Apt 5</a>
                </li>
                <li>
                    <a>Boston, MA 02111</a>
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