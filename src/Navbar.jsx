import { MenuBtn } from "./MenuBtn"
import { NavbarElement } from "./NavbarElement"

export function Navbar(){
    return (
        <div className="nb">
            <ul className="linkList">
                <NavbarElement txtColor={"white"} txt={"PROPERTIES"} link={"./placeholder"}/>
                <NavbarElement txtColor={"white"} txt={"888 - 888 - 8888"} link={"./placeholder"}/>
                <NavbarElement txtColor={"white"} txt={"ABOUT"} link={"./placeholder"}/>
            </ul>
            <MenuBtn/>
        </div>
    )
}