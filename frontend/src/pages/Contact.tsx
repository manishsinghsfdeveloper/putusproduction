// src/pages/Contact.tsx
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-8 md:px-20 py-24 flex flex-col justify-center items-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Link
          to="/contact/contact-us"
          className="px-8 py-4 bg-white text-[#0f172a] font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300"
        >
          Contact Us
        </Link>

        <Link
          to="/contact/subscribe"
          className="px-8 py-4 bg-white text-[#0f172a] font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300"
        >
          Subscribe
        </Link>
      </motion.div>
    </section>
  )
}
