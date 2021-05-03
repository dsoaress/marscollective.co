import { useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

import Logo from '@/assets/Logo'
import Nav from '@/components/Nav'
import ThemeToggle from '@/components/ThemeToggle'
import meta from '@/content/meta'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { title } = meta

  return (
    <header className="container flex justify-between items-center">
      <nav className="lg:flex lg:justify-between lg:w-full">
        <div className="flex">
          <button
            className="mr-4 outline-none focus:outline-none lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <FiMenu size={24} />
          </button>
          <Link href="/" alt={title}>
            <a aria-label={title}>
              <Logo className="w-16" />
            </a>
          </Link>
        </div>
        <div
          className={`absolute inset-x-0 z-10 duration-500 transform overflow-hidden ${
            menuOpen ? `top-32` : `-translate-y-full top-0`
          } lg:relative lg:translate-y-0 lg:top-0`}
        >
          <Nav />
        </div>
      </nav>
      <ThemeToggle />
    </header>
  )
}
