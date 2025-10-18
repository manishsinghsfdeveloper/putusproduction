// src/components/VideoEmbed.tsx
import React from 'react'

type Props = {
  url?: string
  title?: string
}

function getEmbedUrl(url?: string) {
  if (!url) return ''
  // YouTube (watch?v=ID or youtu.be/ID)
  const ytMatch = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/)
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&showinfo=0`
  // Vimeo showcase ?video=ID
  const vimeoQueryMatch = url.match(/[?&]video=(\d+)/)
  if (vimeoQueryMatch) return `https://player.vimeo.com/video/${vimeoQueryMatch[1]}`
  // Vimeo direct numeric
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  // Fallback: return original url (may already be an embed)
  return url
}

export default function VideoEmbed({ url, title }: Props) {
  const embed = getEmbedUrl(url)
  if (!embed) return null
  return (
    <iframe
      src={embed}
      title={title || 'Video'}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    />
  )
}
