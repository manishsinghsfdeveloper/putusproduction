export default function Clients(){
  const logos = ['/src/assets/work1.jpg','/src/assets/work2.jpg','/src/assets/work3.jpg']
  return (
    <section className="section">
      <div className="container">
        <h1 className="font-display text-4xl font-bold">Clients</h1>
        <div className="grid md:grid-cols-6 gap-6 mt-6 items-center">
          {logos.map((l,i)=> <div key={i} className="p-4 bg-white/5 rounded-lg"><img src={l} className="w-full h-12 object-contain" /></div>)}
        </div>
      </div>
    </section>
  )
}
