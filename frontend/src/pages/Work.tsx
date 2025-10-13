import { cases } from '../data/cases'
import CaseCard from '../components/CaseCard'
export default function Work(){
  return (
    <section className="section">
      <div className="container">
        <h1 className="font-display text-4xl font-bold">Work</h1>
        <p className="text-white/70 mt-2">Case studies and selected projects.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {cases.concat(cases).map((c,i)=> <CaseCard key={c.title+i} {...c} />)}
        </div>
      </div>
    </section>
  )
}
