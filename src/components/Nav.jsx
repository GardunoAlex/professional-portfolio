import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="w-full relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="flex gap-10 py-7 justify-center">
        <Link to="/" className="text-slate-100">Home</Link>
        <Link to="/experience" className="text-slate-100">Experience</Link>
        <Link to="/projects" className="text-slate-100">Projects</Link>
        <Link to="/contact" className="text-slate-100">Contact</Link>
      </div>
    </nav>
  )
}