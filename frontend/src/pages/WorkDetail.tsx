// src/pages/WorkDetail.tsx
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { cases } from '@/data/cases'
import VideoEmbed from '@/components/VideoEmbed'

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const item = cases.find(c => c.slug === slug)

  if (!item) {
    return (
      <section className="section py-20">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <p className="mt-4">We couldn't find that project.</p>
          <div className="mt-6">
            <Link to="/work" className="inline-block px-4 py-2 bg-zinc-800 rounded text-white">
              Back to work
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="section py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <button className="text-sm text-white/60 mb-6" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1 className="text-3xl font-display font-bold">{item.title}</h1>
        <p className="text-sm text-white/70 mt-1">{item.client} {item.year ? `• ${item.year}` : ''}</p>

        <p className="mt-4 text-white/80">{item.description}</p>

        <div className="mt-8 aspect-video bg-black rounded-xl overflow-hidden">
          <VideoEmbed url={item.videoUrl} title={item.title} />
        </div>

        {item.credits && (
          <div className="mt-6 p-4 rounded bg-zinc-900">
            <h4 className="font-semibold">Credits</h4>
            <p className="text-white/70 mt-2">{item.credits}</p>
          </div>
        )}
      </div>
    </main>
  )
}
