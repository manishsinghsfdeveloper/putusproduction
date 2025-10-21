import { cases } from '@/data/cases'
import CaseCard from '@/components/CaseCard'
import { motion } from 'framer-motion'

export default function Work() {
  const categories = ['Commercial Ads', 'Short Films', 'Films']

  return (
    <section className="section relative">
      <div className="container relative z-10">
        <motion.h1
          className="font-display text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h1>

        {categories.map((cat, index) => {
          const filtered = cases.filter((c) => c.category === cat)
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={cat}
              className="mb-24 relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Fading background */}
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

              {/* Heading */}
              <motion.div
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl font-semibold">{cat}</h2>
                <span className="text-sm text-white/60">
                  {filtered.length} Projects
                </span>
              </motion.div>

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
                  className="absolute left-1/2 -translate-x-1/2 h-px mt-16 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
  )
}
