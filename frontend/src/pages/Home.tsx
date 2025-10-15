import { Link } from "react-router-dom";
import Hero from '../components/Hero'
import { cases } from '../data/cases'
import CaseCard from '../components/CaseCard'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-4xl font-bold">Selected work</h2>
            <Link to="/work" className="text-sm underline">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {cases.map((c) => (
              <CaseCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}