// src/App.tsx
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import Home from './pages/Home'
import Work from './pages/Work'
import Services from './pages/Services'
import About from './pages/About'
import Studio from './pages/Studio'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Clients from './pages/Clients'
import Insights from './pages/Insights'
import NotFound from './pages/NotFound'
import WorkDetail from '@/pages/WorkDetail' // new route import

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrap><Home/></PageWrap>} />
          <Route path="/work" element={<PageWrap><Work/></PageWrap>} />
          <Route path="/work/:slug" element={<PageWrap><WorkDetail/></PageWrap>} />
          <Route path="/services" element={<PageWrap><Services/></PageWrap>} />
          <Route path="/about" element={<PageWrap><About/></PageWrap>} />
          <Route path="/studio" element={<PageWrap><Studio/></PageWrap>} />
          <Route path="/careers" element={<PageWrap><Careers/></PageWrap>} />
          <Route path="/contact" element={<PageWrap><Contact/></PageWrap>} />
          <Route path="/clients" element={<PageWrap><Clients/></PageWrap>} />
          <Route path="/insights" element={<PageWrap><Insights/></PageWrap>} />
          <Route path="*" element={<PageWrap><NotFound/></PageWrap>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function PageWrap({children}:{children:React.ReactNode}) {
  return (
    <motion.main
      initial={{opacity:0, y:10}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-10}}
      transition={{duration:0.5}}
      className="flex-1"
    >
      {children}
    </motion.main>
  )
}
