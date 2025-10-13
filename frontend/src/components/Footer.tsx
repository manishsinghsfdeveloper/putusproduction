export default function Footer(){
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
        <div>© {new Date().getFullYear()} Putus Production</div>
        <div>Built with React · Vite · Tailwind</div>
      </div>
    </footer>
  )
}
