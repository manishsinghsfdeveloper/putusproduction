import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo from '@/assets/logo-light.svg' // ✅ correct image import

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-colors ${
        scrolled
          ? 'bg-[#081226]/90 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* ✅ Logo imported correctly */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Putus Production Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
          <Link to="/studio">Studio</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="text-ember">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
