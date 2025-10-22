// src/components/contact/ContactForm.tsx
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function ContactForm() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-8 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <Link
          to="/contact"
          className="text-gray-300 hover:text-white mb-8 inline-block transition-all duration-300"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-800 text-white rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-800 text-white rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-4 bg-gray-800 text-white rounded-lg h-32" />
          <button className="px-8 py-4 bg-white text-[#0f172a] rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  )
}
