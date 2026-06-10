// src/pages/Contact.tsx
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

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

        {/* Contact Information Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 border border-gray-700/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-600/10 rounded-xl group-hover:bg-red-600/20 transition-all duration-300">
                  <FaEnvelope className="text-2xl text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200">Email Us</h3>
              </div>
              <a 
                href="mailto:hello@putusproduction.com" 
                className="text-lg text-gray-300 hover:text-red-400 transition-colors duration-300 block break-all"
              >
                hello@putusproduction.com
              </a>
              <p className="text-sm text-gray-500 mt-3">We'll respond within 24 hours</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 border border-gray-700/50 hover:border-red-600/50 transition-all duration-500 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-red-600/10 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-red-600/10 rounded-xl group-hover:bg-red-600/20 transition-all duration-300">
                  <FaPhone className="text-2xl text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-200">Call Us</h3>
              </div>
              <a 
                href="tel:+919082736908" 
                className="text-lg text-gray-300 hover:text-red-400 transition-colors duration-300 block"
              >
                +91 9082736908
              </a>
              <p className="text-sm text-gray-500 mt-3">Mon-Sat, 10 AM - 7 PM IST</p>
            </div>
          </div>
        </motion.div>

        {/* Location Info */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 border border-gray-700/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-600/10 rounded-xl">
              <FaMapMarkerAlt className="text-2xl text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Visit Us</h3>
              <p className="text-gray-400 leading-relaxed">
                Putus Production<br />
                Creative Film Production House<br />
                India
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Media Footer */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mt-24 border-t border-gray-700 pt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-gray-400 mb-4 md:mb-0">Connect with us on social media</p>
        <div className="flex space-x-6 text-xl">
          <a 
            href="https://www.facebook.com/profile.php?id=61560594320914" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800/50 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://www.instagram.com/putusproduction/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800/50 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/in/putus-production-110074311/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-gray-800/50 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

// Made with Bob
