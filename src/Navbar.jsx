import { MenuBtn } from "./MenuBtn"
import { LinkedElement } from "./LinkedElement"
import { useState, useEffect, useRef } from 'react'

export function Navbar({toggleOverlay}){
    const [visible, setVisible] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollingDown, setScrollingDown] = useState(false);
    const prevScrollPosRef = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        setVisible(scrollPosition > 800);

        console.log("Scroll: ", scrollPosition < 800);
        console.log(scrollPosition < 800);
  
        if (scrollPosition > prevScrollPosRef.current) {
          setScrollingDown(true);
        } else {
          setScrollingDown(false);
        }
  
        prevScrollPosRef.current = scrollPosition;  // Update ref immediately
      };

        const handleVisibilityChange = () => {
            if (!document.hidden) handleScroll();
        };
    
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <div className={`nb ${ visible ? '' : 'transparent'} ${ scrollingDown ? 'movedUp' : '' }`}>
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