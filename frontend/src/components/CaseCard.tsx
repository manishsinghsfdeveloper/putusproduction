// src/components/CaseCard.tsx
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  client?: string
  image?: string
  slug?: string
  category?: string
}

export default function CaseCard({ title, client, image, slug, category }: Props) {
  const to = slug ? `/work/${slug}` : '/work'
  return (
    <article className="group rounded-xl overflow-hidden bg-white/5">
      <Link to={to} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-zinc-900/20">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          {client && <p className="text-sm text-white/70 mt-1">{client}</p>}
          {category && <p className="text-xs text-white/50 mt-1">{category}</p>}
        </div>
      </Link>
    </article>
  )
}
