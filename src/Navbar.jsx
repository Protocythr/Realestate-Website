import { MenuBtn } from "./MenuBtn"
import { LinkedElement } from "./LinkedElement"

export function Navbar({toggleOverlay}){
    return (
        <div className="nb">
            <ul className="logos">
                <li>
                    <img className="wr_logo" src="./assets/logo-raveis.svg"/>
                </li>
                <li>
                    <img className="wmc_logo" src="./assets/placeholder.svg"/>
                </li>
            </ul>
            <ul className="linkList">
                <LinkedElement txtColor={"white"} txt={"PROPERTIES"} link={"./placeholder"}/>
                <LinkedElement txtColor={"white"} txt={"888 - 888 - 8888"} link={"./placeholder"}/>
                <LinkedElement txtColor={"white"} txt={"ABOUT"} link={"./placeholder"}/>
            </ul>
            <MenuBtn toggleOverlay={toggleOverlay}/>
        </div>
    )
}