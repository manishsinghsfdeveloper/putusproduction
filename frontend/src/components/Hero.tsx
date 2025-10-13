import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function Hero(){
  return (
    <section className="section">
      <div className="container text-center">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="font-display text-5xl md:text-7xl font-extrabold text-ember">
          We turn brands into movements.
        </motion.h1>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Strategy, storytelling and production under one roof. We ship work that moves culture and business.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="red-btn">Work With Us</Link>
        </div>
      </div>
    </section>
  )
}
