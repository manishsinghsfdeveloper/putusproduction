import { Link } from 'react-router-dom'
import { team } from '../data/team'

export default function OurTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-4xl font-display font-bold mb-8">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {team.map(member => (
            <Link
              key={member.id}
              to={`/team/${member.id}`}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={`/assets/${member.image}`}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sky-100/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-700">{member.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
