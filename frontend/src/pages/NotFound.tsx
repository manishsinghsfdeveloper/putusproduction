import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="font-display text-6xl font-bold">404</h1>
        <p className="mt-4 text-white/70">Page not found.</p>
        <div className="mt-6"><Link to='/' className="red-btn">Back home</Link></div>
      </div>
    </section>
  )
}
