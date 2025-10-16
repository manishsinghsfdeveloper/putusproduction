export default function Insights(){
  const posts = [
    {title:'The Future of Brand Storytelling', excerpt:'How narrative drives culture.'},
    {title:'Designing for Attention', excerpt:'Creative systems that scale.'},
    {title:'Production at Speed', excerpt:'How we ship high-quality content fast.'},
  ]
  return (
    <section className="section">
      <div className="container">
        <h1 className="font-display text-4xl font-bold">Insights</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {posts.map(p=> (
            <article key={p.title} className="card">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-white/70 mt-2">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
