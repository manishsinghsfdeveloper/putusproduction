import { cases } from '@/data/cases'
import CaseCard from '@/components/CaseCard'
import { motion } from 'framer-motion'

export default function Work() {
  const categories = ['Commercial Ads', 'Short Films', 'Films']

  return (
    <section className="section">
      <div className="container">
        <motion.h1
          className="font-display text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h1>

        {categories.map((cat, index) => {
          const filtered = cases.filter((c) => c.category === cat)

          return (
            <motion.div
              key={cat}
              className="mb-24 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Category Heading */}
              <motion.div
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-semibold">{cat}</h2>
                <span className="text-sm text-white/60">
                  {filtered.length} Projects
                </span>
              </motion.div>

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

              {/* Divider */}
              {index < categories.length - 1 && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 h-px mt-16 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
  )
}
