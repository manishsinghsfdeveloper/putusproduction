export type CaseItem = {
  title: string
  client?: string
  slug: string
  thumb: string
  videoUrl: string
  year?: string
  description?: string
  credits?: string
  category: 'Commercial Ads' | 'Short Films' | 'Films' | 'Public Service Awareness' 
}

import ppJewellersMother from '@/assets/work/pp-jewellers-mother-daughter.jpg'
import ppJewellersChild from '@/assets/work/pp-jewellers-child-mother.jpg'
import quantum1 from '@/assets/work/quantum-university-01.jpg'
import quantum2 from '@/assets/work/quantum-university-02.jpg'
import hatric from '@/assets/work/hatric-detergent.jpg'
import inwyn from '@/assets/work/inwyn.jpg'
import whiteForce from '@/assets/work/white-force.jpg'
import shivveda from '@/assets/work/shivveda.jpg'
import lehenga from '@/assets/work/lehenga-trailer.jpg'
import scotland from '@/assets/work/scotland-film.jpg'
import successfulLoosers from '@/assets/work/successful-loosers.jpg'
import jmmPSA from '@/assets/work/jmm-psa.jpg'

export const cases: CaseItem[] = [
  {
    title: "PP Jewellers – Mother & Daughter Story",
    client: "PP Jewellers",
    slug: "pp-jewellers-mother-daughter",
    thumb: ppJewellersMother,
    videoUrl: "https://vimeo.com/showcase/11211503?video=949509658",
    year: "2024",
    description: "An emotional commercial capturing timeless relationships.",
    category: "Commercial Ads",
  },
  {
    title: "PP Jewellers – Child & Mother Story",
    client: "PP Jewellers",
    slug: "pp-jewellers-child-mother",
    thumb: ppJewellersChild,
    videoUrl: "https://vimeo.com/showcase/11211503?video=953888112",
    year: "2024",
    description: "Heartwarming ad celebrating familial bonds.",
    category: "Commercial Ads",
  },
  {
    title: "Quantum University – Saina Nehwal (01)",
    client: "Quantum University",
    slug: "quantum-university-01",
    thumb: quantum1,
    videoUrl: "https://vimeo.com/showcase/11211503?video=947013363",
    year: "2024",
    description: "Featuring Saina Nehwal for Quantum University campaign.",
    category: "Commercial Ads",
  },
  {
    title: "Quantum University – Saina Nehwal (02)",
    client: "Quantum University",
    slug: "quantum-university-02",
    thumb: quantum2,
    videoUrl: "https://vimeo.com/showcase/11211503?video=911933544",
    year: "2024",
    description: "A powerful educational campaign spot.",
    category: "Commercial Ads",
  },
  {
    title: "Hatric Detergent Powder",
    client: "Hatric",
    slug: "hatric-detergent",
    thumb: hatric,
    videoUrl: "https://vimeo.com/showcase/11211503?video=911932348",
    year: "2023",
    description: "A vibrant detergent commercial emphasizing freshness.",
    category: "Commercial Ads",
  },
  {
    title: "Inwyn – 15s Social Ads (6x)",
    client: "Inwyn",
    slug: "inwyn-social-ads",
    thumb: inwyn,
    videoUrl: "https://vimeo.com/showcase/11211503?video=1039820609",
    year: "2024",
    description: "Fast-paced social media campaign series.",
    category: "Commercial Ads",
  },
  {
    title: "White Force (Social Media)",
    client: "White Force",
    slug: "white-force",
    thumb: whiteForce,
    videoUrl: "https://vimeo.com/showcase/11211503?video=1028009462",
    year: "2024",
    description: "Creative campaign for White Force.",
    category: "Commercial Ads",
  },
  {
    title: "Shivveda – Mallika Sherawat",
    client: "Shivveda",
    slug: "shivveda",
    thumb: shivveda,
    videoUrl: "https://vimeo.com/showcase/11211503?video=1076970624",
    year: "2025",
    description: "A luxurious wellness commercial featuring Mallika Sherawat.",
    category: "Commercial Ads",
  },
  {
    title: "Lehenga (Short Film Trailer)",
    client: "Putus Production",
    slug: "lehenga-trailer",
    thumb: lehenga,
    videoUrl: "https://vimeo.com/showcase/11211503?video=953903617",
    year: "2024",
    description: "Short film trailer exploring human emotions.",
    category: "Short Films",
  },
  {
    title: "Scotland (Official Trailer)",
    client: "Putus Production",
    slug: "scotland-film",
    thumb: scotland,
    videoUrl: "https://www.youtube.com/watch?v=pzXk8gN3E-s",
    year: "2020",
    description: "Award-winning feature film recognized at international festivals.",
    category: "Films",
  },
  {
    title: "The Successful Losers",
    client: "Putus Production",
    slug: "successful-losers",
    thumb: successfulLoosers,
    videoUrl: "https://www.youtube.com/watch?v=xqpS5ggxrSI",
    year: "2021",
    description: "Feature film streaming on MX Player.",
    category: "Films",
  },
  {
  title: "Public Service Awareness — Jharkhand Mukti Morcha (JMM)",
  client: "Putus Production",
  slug: "jmm-public-service-awareness",
  thumb: jmmPSA,
  videoUrl: "https://www.youtube.com/embed/eA2aZi5LpQs",
  year: "2024",
  description: "A meaningful government awareness film crafted by Putus Production to promote positive social impact.",
  credits: "Directed and Produced by Putus Production",
  category: "Public Service Awareness",
},
]
