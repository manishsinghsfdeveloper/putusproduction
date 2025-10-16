import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader(){
  const [show, setShow] = useState(true)
  useEffect(()=>{
    const t = setTimeout(()=> setShow(false), 1200)
    return ()=> clearTimeout(t)
  },[])
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.8}} className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]">
          <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} transition={{duration:0.6}} className="flex items-center gap-4">
            <img src="/src/assets/logo-light.svg" alt="Putus" className="h-16" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
