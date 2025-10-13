export default function CaseCard({title, client, image}:{title:string;client:string;image:string}){
  return (
    <article className="card">
      <div className="aspect-[16/10] bg-white/5 mb-4 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover"/>
      </div>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="text-sm text-white/70 mt-1">{client}</p>
    </article>
  )
}
