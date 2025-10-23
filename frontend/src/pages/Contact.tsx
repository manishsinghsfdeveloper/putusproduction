// src/pages/Contact.tsx
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-8 md:px-20 py-24 flex flex-col justify-between">
      {/* Main Contact Sections */}
      <div className="flex flex-col gap-24">
        <motion.div
          className="group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/contact/contact-us">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            <p className="text-xl text-gray-300 group-hover:text-red-500 transition-colors duration-300 max-w-xl">
              Reach out for new business, media inquiries and other requests
            </p>
          </Link>
        </motion.div>

        <motion.div
          className="group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Link to="/contact/subscribe">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 relative inline-block">
              Subscribe
              <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            <p className="text-xl text-gray-300 group-hover:text-red-500 transition-colors duration-300 max-w-xl">
              Stay up to date with our latest thinking
            </p>
          </Link>
        </motion.div>
      </div>

      {/* Social Media Footer */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mt-24 border-t border-gray-700 pt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-gray-400 mb-4 md:mb-0">Connect with us</p>
        <div className="flex space-x-6 text-xl">
          <a href="https://www.facebook.com/profile.php?id=61560594320914" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/putusproduction/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/putus-production-110074311/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors duration-300">
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
