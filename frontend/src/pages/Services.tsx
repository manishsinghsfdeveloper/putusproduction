import { motion } from 'framer-motion'
export default function Services(){
  const items = [
    {title: 'Film Production', desc: 'From script to screen — commercials, branded films, short documentaries.', img:'/src/assets/work1.jpg'},
    {title: 'Brand Strategy & Design', desc: 'Positioning, identity systems and narrative frameworks.', img:'/src/assets/work2.jpg'},
    {title: 'Photography & Campaigns', desc: 'Editorial, product and lifestyle photography.', img:'/src/assets/work3.jpg'},
    {title: 'Post-Production & Editing', desc: 'Color, sound and motion finishing.', img:'/src/assets/work1.jpg'},
    {title: 'Digital & Social', desc: 'Content strategy, paid social and creative growth.', img:'/src/assets/work2.jpg'},
  ]
  return (
    <section className="section">
      <div className="container">
        <h1 className="font-display text-4xl font-bold">Services</h1>
        <p className="text-white/70 mt-2">Our disciplines</p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {items.map((it,i)=> (
            <motion.div key={it.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card flex gap-6 items-center">
              <div className="w-36 h-24 overflow-hidden rounded-lg"><img src={it.img} className="w-full h-full object-cover" /></div>
              <div>
                <h3 className="font-display text-xl font-bold">{it.title}</h3>
                <p className="text-white/70 mt-1">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
