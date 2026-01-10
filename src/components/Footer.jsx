import { Link } from "react-router-dom"

export default function Footer() {
	return (
		<footer className="
			w-full
			relative
			p-8
			text-zinc-400
			after:pointer-events-none
			after:absolute
			after:inset-x-0
			after:top-0
			after:h-px
			after:bg-white/10
		">
			<div className="max-w-7xl mx-auto space-y-6">

				{/* Top row */}
                <div className="grid grid-cols-3 items-center gap-6">
                    
                    {/* Left */}
                    <div className="text-left">
                        <p className="text-white font-medium">
                            Alexander Garduno Garcia
                        </p>
                        <p className="text-sm text-slate-300">
                            Full-Stack Software Engineer · Machine Learning
                        </p>
                    </div>

                    {/* Center */}
                    <nav className="flex justify-center gap-6 text-sm">
                        <Link to="/" className="hover:text-white transition text-slate-300">Home</Link>
                        <Link to="/experience" className="hover:text-white transition text-slate-300">Experience</Link>
                        <Link to="/projects" className="hover:text-white transition text-slate-300">Projects</Link>
                        <Link to="/contact" className="hover:text-white transition text-slate-300">Contact</Link>
                    </nav>

                    {/* Right */}
                    <div className="flex justify-end gap-6 text-sm">
                        <a
                            href="https://github.com/GardunoAlex"
                            className="hover:text-white transition text-slate-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/alexandergarduno/"
                            className="hover:text-white transition text-slate-300"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>

				{/* Bottom row */}
				<div className="pt-4 text-center text-xs text-slate-300">
					© 2026 Alexander Garduno Garcia — Last updated January 2026
				</div>

			</div>
		</footer>
	)
}
