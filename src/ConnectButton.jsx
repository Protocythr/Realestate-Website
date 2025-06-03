import { useState, useEffect } from "react";

export function ConnectButton(){
    const [visible, setVisible] = useState();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;
        
            const distance = documentHeight - (scrollPosition + windowHeight);
            setVisible(distance > 200);
        };

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                handleScroll(); // Re-evaluate when tab becomes visible again
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return <button className={`cntbtn ${visible ? '' : 'hidden'}`}>LET'S CONNECT</button>
}