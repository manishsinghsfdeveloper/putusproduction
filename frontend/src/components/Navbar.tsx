import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi"
import logo from "@/assets/logo-light.svg"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Detect scroll for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/studio", label: "Studio" },
    { to: "/insights", label: "Insights" },
    { to: "/clients", label: "Clients" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-colors ${
        scrolled ? "bg-[#0f172a]/95 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Putus Production Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} currentPath={location.pathname}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden absolute top-16 left-0 w-full bg-[#0f172a] border-t border-white/5 flex flex-col items-center space-y-6 py-8 text-lg"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                currentPath={location.pathname}
                mobile
              >
                {link.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

// ✅ Custom NavLink with underline animation
function NavLink({
  to,
  currentPath,
  children,
  mobile = false,
}: {
  to: string
  currentPath: string
  children: React.ReactNode
  mobile?: boolean
}) {
  const isActive = currentPath === to
  return (
    <Link
      to={to}
      className={`relative group ${
        mobile ? "text-white" : "text-white/90"
      } hover:text-white transition-colors duration-300`}
    >
      {children}
      {!mobile && (
        <motion.span
          layoutId="underline"
          className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          } transition-all duration-300`}
        />
      )}
    </Link>
  )
}
