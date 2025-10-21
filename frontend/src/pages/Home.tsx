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

      <section className="section relative">
        <div className="container relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-4xl font-bold">Selected work</h2>
            <Link to="/work" className="text-sm underline hover:text-white/80">
              View all
            </Link>
          </div>

          {categories.map((cat, index) => {
            const filtered = cases.filter((c) => c.category === cat).slice(0, 3)
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={cat}
                className="mb-20 relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 -z-10 ${
                    isEven
                      ? 'bg-gradient-to-b from-white/5 via-transparent to-transparent'
                      : 'bg-gradient-to-b from-transparent via-white/5 to-transparent'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                />

                {/* Category heading */}
                <motion.h3
                  className="font-display text-2xl font-semibold mb-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {cat}
                </motion.h3>

                {/* Case grid */}
                <motion.div
                  className="grid md:grid-cols-3 gap-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
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

                {/* Divider */}
                {index < categories.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 h-px mt-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
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
