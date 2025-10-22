// src/components/contact/ContactOptions.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ContactOptions() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Us */}
            <div className="group relative cursor-pointer">
              <Link to="/contact/contact-us">
                <motion.h2 className="text-2xl font-semibold mb-2">Contact us</motion.h2>
                <motion.div
                  className="h-px bg-white/30 group-hover:bg-white transition-all duration-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
                <p className="mt-4 text-lg text-gray-300 max-w-md">
                  Reach out for new business, media inquiries and other requests.
                </p>
              </Link>
            </div>

            {/* Subscribe */}
            <div className="group relative cursor-pointer">
              <Link to="/contact/subscribe">
                <motion.h2 className="text-2xl font-semibold mb-2">Subscribe</motion.h2>
                <motion.div
                  className="h-px bg-white/30 group-hover:bg-white transition-all duration-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
                <p className="mt-4 text-lg text-gray-300 max-w-md">
                  Stay up to date with our latest thinking.
                </p>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
