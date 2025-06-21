import { ConnectButton } from "./components/ConnectButton"
import { Frontpage } from "./components/Frontpage"
import { Navbar } from "./components/Navbar"
import { useState } from "react"
import { Overlay } from "./components/Overlay"
import './components/Frontpage.css'
import './components/Overlay.css'
import './components/ContentStyles.css'
import './components/UIElements.css'

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