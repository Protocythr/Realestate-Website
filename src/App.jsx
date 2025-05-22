import { ConnectButton } from "./ConnectButton"
import { Frontpage } from "./Frontpage"
import { Navbar } from "./Navbar"
import './ContentStyles.css'
import './UIElements.css'

function App() {

  return (
    <>
      <Frontpage/>
      <Navbar/>
      <ConnectButton/>
    </>
  )
}

export default App