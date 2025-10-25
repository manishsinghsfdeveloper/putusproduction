import Hero from '../components/Hero'
import { cases } from '../data/cases'
import CaseCard from '../components/CaseCard'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  const categories = Array.from(new Set(cases.map((c) => c.category)))

  return (
    <div>
      <Hero />
      <section className="section bg-[#0f172a] text-gray-200 py-16">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-display font-bold text-white">About Putus Production</h2>
          <p className="text-lg leading-relaxed">
            Putus (Lantana Camara from the family Verbenaceae) is a versatile and visually striking plant from Jharkhand, India that has both vibrant impacts depending on its context and management. The same context, we carry in our startup Putus.
            We at Putus do filmmaking, advertisements, promotion of your product, provide our services, idea, and concept for the betterment of our day-to-day life.
            Our goal is to persuade and influence target audiences to take specific actions, such as purchasing a product, subscribing to a service, or adopting a particular viewpoint on genuine grounds.
          </p>
        </div>
      </section>
      
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
