import { ConnectButton } from "./ConnectButton"
import { Frontpage } from "./Frontpage"
import { Navbar } from "./Navbar"
import { useState } from "react"
import { Overlay } from "./Overlay"
import './Frontpage.css'
import './Overlay.css'
import './ContentStyles.css'
import './UIElements.css'

function App() {

  const [showOverlay, setShowOverlay] = useState(false);

  function toggleOverlay() {
    setShowOverlay(prev => !prev);
  }

  return (
    <>
      <Frontpage/>
      <ConnectButton/>
      <Overlay visible={showOverlay} />
      <Navbar toggleOverlay={toggleOverlay}/>
    </>
  );
}

export default App