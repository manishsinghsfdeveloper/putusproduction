import Hero from '../components/Hero'
import { cases } from '../data/cases'
import CaseCard from '../components/CaseCard'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  const categories = ['Commercial Ads', 'Short Films', 'Films']

  return (
    <div>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-4xl font-bold">Selected Work</h2>
            <Link to="/work" className="text-sm underline hover:text-white/80">
              View all
            </Link>
          </div>

          {categories.map((cat, index) => {
            const filtered = cases.filter((c) => c.category === cat).slice(0, 3)

            return (
              <motion.div
                key={cat}
                className="mb-20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Category Heading */}
                <motion.h3
                  className="font-display text-2xl font-semibold mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {cat}
                </motion.h3>

                {/* Case Grid */}
                <motion.div
                  className="grid md:grid-cols-3 gap-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {filtered.map((c) => (
                    <CaseCard
                      key={c.slug}
                      title={c.title}
                      client={c.client}
                      image={c.thumb}
                      slug={c.slug}
                    />
                  ))}
                </motion.div>

                {/* Animated Divider */}
                {index < categories.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 h-px mt-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
