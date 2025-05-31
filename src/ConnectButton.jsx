import { useState, useEffect } from "./react";

export function ConnectButton(){
    const [visible, setVisible] = useState();

    return <button className="cntbtn">LET'S CONNECT</button>
}