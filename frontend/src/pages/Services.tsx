import React from "react"
import { motion } from "framer-motion"

import PostProductionImg from "@/assets/services/Post-Production-Services.jpg"
import PromoteBusinessImg from "@/assets/services/Promote-Your-Business.jpg"
import WriterDirectorImg from "@/assets/services/Writer-Director-Services.jpg"
import LineProducingImg from "@/assets/services/Line-Producing-Services.jpg"
import PublicAwarenessImg from "@/assets/services/Public-Service-Awareness.jpg"

const services = [
  {
    title: "🎬 Post-Production Services",
    desc: "At Putus Production, we transform raw footage into cinematic experiences. Our post-production team specializes in editing, VFX, sound design, and color grading, ensuring every frame aligns with your creative vision. From storytelling rhythm to visual polish, we deliver seamless, high-quality results that elevate your final product for broadcast, streaming, or theatrical release.",
    img: PostProductionImg,
  },
  {
    title: "📢 Promote Your Business",
    desc: "Enhance your brand visibility with our complete media and promotional content production. We craft engaging advertisements, product videos, and corporate films designed to connect your message with your audience. Whether launching a new product or building long-term brand awareness, our team helps you achieve impactful marketing results across digital and broadcast platforms.",
    img: PromoteBusinessImg,
  },
  {
    title: "✍️ Writer & Director Services",
    desc: "Our writer and director services bring stories to life with creativity and precision. From concept development and scriptwriting to directing on set, we focus on story, vision, and leadership. Every project receives a personalized approach to ensure your ideas are translated into powerful, emotionally resonant visuals that captivate audiences.",
    img: WriterDirectorImg,
  },
  {
    title: "🎥 Line Producing Services",
    desc: "Putus Production offers professional line producing services for films, advertisements, and documentaries. We manage your project from budgeting and scheduling to crew coordination and logistics, ensuring smooth execution and timely delivery. Our expertise keeps productions on track while maintaining high creative and technical standards.",
    img: LineProducingImg,
  },
  {
    title: "🕊️ Public Service Awareness (PSA)",
    desc: "We create powerful Public Service Announcements that raise awareness and promote social change on vital issues like health, safety, and welfare. From concept to broadcast, our team collaborates with government and social organizations to craft meaningful stories that educate, inspire, and drive positive action across TV, radio, and digital platforms.",
    img: PublicAwarenessImg,
  },
]

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0f172a] text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-white/80">
            Our services include idea formation and ad creation for various platforms.
            In an AI-driven world, it’s increasingly challenging to attract customers
            to the right product. We use persuasive techniques — storytelling, humor,
            emotion, celebrity endorsements, testimonials, and data-driven appeal —
            to make your brand stand out.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-[#0f172a] text-gray-200">
        <div className="container max-w-4xl mx-auto text-center space-y-6 mb-10">
          <h2 className="text-4xl font-display font-bold text-white">What We Offer</h2>
          <p className="text-lg leading-relaxed">
            We at <strong>Putus</strong> strive to deliver satisfaction and measurable
            results through our creative, strategic, and technical expertise. From
            commercials and films to digital storytelling, our mission is to connect
            you with your audience in meaningful ways.
          </p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-11 max-w-6xl">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0
            return (
              <motion.div
                key={idx}
                className="group relative bg-white/5 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Image section */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    whileHover={{ filter: "brightness(1.1)" }}
                  />

                  {/* Cinematic fading gradient */}
                  <motion.div
                    className={`absolute inset-0 -z-10 transition-all duration-700 ${
                      isEven
                        ? 'bg-gradient-to-b from-white/10 via-transparent to-[#0f172a]'
                        : 'bg-gradient-to-b from-transparent via-white/10 to-[#0f172a]'
                    } group-hover:from-white/20 group-hover:via-white/15 group-hover:to-[#0f172a]/90`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Text content */}
                <div className="p-6 text-left relative z-10 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/95 to-transparent">
                  <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
