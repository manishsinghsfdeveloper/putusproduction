import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '@/assets/logo-light.svg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/studio', label: 'Studio' },
    { to: '/insights', label: 'Insights' },
    { to: '/clients', label: 'Clients' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' }, 
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-colors ${
        scrolled
          ? 'bg-[#081226]/90 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Putus Production Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* ✅ Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm relative">
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to
            return (
              <div key={to} className="relative">
                <Link
                  to={to}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? 'text-ember font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>

                {/* 🔥 Animated underline for active link */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 h-[2px] bg-ember rounded-full mt-1"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
