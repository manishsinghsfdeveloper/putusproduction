import { Link, NavLink } from 'react-router-dom'
export default function Navbar(){
  return (
    <header className="bg-black/90 border-b border-white/5 sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-display font-extrabold">Putus Production</Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
