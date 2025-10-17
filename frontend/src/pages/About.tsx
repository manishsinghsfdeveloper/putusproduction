import { team } from '../data/team'

export default function About() {
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl font-bold">About Putus Production</h1>
        <p className="mt-4 text-white/80">
          Putus Production is a creative production house specialising in brand storytelling, film and campaigns. 
          We combine strategy, craft and production to create work that moves culture.
        </p>

        <h2 className="font-display text-2xl font-bold mt-8">Leadership</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-4">
          {team.map(t => (
            <div key={t.name} className="card text-center bg-white/5 p-6 rounded-xl">
              <div className="aspect-square mb-4 overflow-hidden rounded-full mx-auto w-28 h-28">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-white">{t.name}</h4>
              <p className="text-white/70 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
