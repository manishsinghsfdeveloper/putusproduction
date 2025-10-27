import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/Loader_PutusLogo.jpg' // ✅ Import the image file

export default function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 700)
    return () => clearTimeout(t)
  }, [])

  console.log("✅ PageLoader is running, showing logo:", logo)

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]"
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {/* ✅ Your image logo */}
            <img src={logo} alt="Putus Production" className="h-24 w-auto object-contain" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
