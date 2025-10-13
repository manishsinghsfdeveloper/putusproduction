export default function Services(){
  const items = [
    {title: 'Brand Strategy', desc: 'Positioning, platforms, verbal identity.'},
    {title: 'Identity Systems', desc: 'Logos, typography, color, motion.'},
    {title: 'Production', desc: 'Film, photo, post and motion.'},
  ]
  return (
    <section className="section">
      <div className="container">
        <h1 className="font-display text-4xl font-bold">Services</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map(i=> (
            <div key={i.title} className="card">
              <h3 className="font-bold">{i.title}</h3>
              <p className="text-white/70 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
