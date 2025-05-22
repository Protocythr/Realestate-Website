import { useState } from 'react'
import Hamburger from 'hamburger-react'

export function MenuBtn() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Hamburger toggled={isOpen} toggle={setOpen} color='white'/>
  )
}
