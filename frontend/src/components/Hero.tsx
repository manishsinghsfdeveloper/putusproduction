import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function Hero(){
  return (
    <section className="section">
      <div className="container text-center">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="font-display text-5xl md:text-7xl font-extrabold text-ember">
          We create stories that move people.
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Strategy, craft and production — from concept to cultural impact.
        </motion.p>
        <div className="mt-8">
          <Link to="/contact" className="red-btn">Work With Us</Link>
        </div>
      </div>
    </section>
  )
}
