import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

export function MenuBtn({toggleOverlay}) {
  const [isOpen, setOpen] = useState(false)

  return (
    <Hamburger 
    toggled={isOpen} 
    toggle={setOpen} 
    onToggle={() => toggleOverlay()} 
    color='white'/>
  )
}
