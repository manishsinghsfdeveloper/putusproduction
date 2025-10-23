import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  const [showConnect, setShowConnect] = useState(false)

  return (
    <footer className="bg-[#0f172a] text-gray-400 px-8 md:px-20 py-10 border-t border-gray-800 relative">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Putus Production. All rights reserved.</p>

        {/* Hover-to-show Connect */}
        <div
          className="relative mt-6 md:mt-0"
          onMouseEnter={() => setShowConnect(true)}
          onMouseLeave={() => setShowConnect(false)}
        >
          <button className="text-white font-semibold tracking-wide hover:text-red-500 transition-colors duration-300">
            Connect
          </button>

          <AnimatePresence>
            {showConnect && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 text-xl"
              >
                <motion.a
                  href="https://www.facebook.com/profile.php?id=61560594320914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/putusproduction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/putus-production-110074311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <FaLinkedinIn />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  )
}
