export default function Studio(){
  return (
    <section className="section">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl font-bold">Studio</h1>
        <p className="mt-4 text-white/80">Our studio blends craft and technology. From camera rigs to editorial suites, we deliver production that scales.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card"><h3 className="font-bold">Camera & Equipment</h3><p className="text-white/70 mt-2">Industry-grade camera & lighting kits.</p></div>
          <div className="card"><h3 className="font-bold">Post Production</h3><p className="text-white/70 mt-2">Color grading, editing & VFX.</p></div>
          <div className="card"><h3 className="font-bold">Sound & Mix</h3><p className="text-white/70 mt-2">Studio-level sound design & mixing.</p></div>
        </div>
      </div>
    </section>
  )
}
