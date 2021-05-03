import { RiCopyleftLine } from 'react-icons/ri'

import Logo from '@/assets/Logo'
import Nav from '@/components/Nav'

export default function Footer() {
  return (
    <footer className="container grid gap-4 justify-items-center lg:flex lg:justify-between lg:items-center">
      <Logo className="w-16" />

      <div className="hidden xl:block">
        <Nav />
      </div>
      <div className="flex items-center font-semibold">
        Mars Collective <RiCopyleftLine size={12} className="mx-1" />
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}
