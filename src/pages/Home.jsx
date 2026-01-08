import profile from "../static/images/alex.png"
import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="w-full min-h-screen">

			{/* ================= HERO ================= */}
			<section className="max-w-5xl mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
				<div className="relative w-48 h-48 mb-8">
					<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur-2xl opacity-50 scale-110" />
					<img
						src={profile}
						alt="Alex"
						className="relative w-full h-full rounded-full object-cover border border-blue-400/40 hover:scale-105 transition duration-300"
						style={{ objectPosition: "70% 0%" }}
					/>
				</div>

				<div className="flex justify-center mt-4">
					<div className="flex items-center gap-2 p-2 mb-4 rounded-full border border-green-400/40 bg-green-500/10 backdrop-blur shadow-sm">

						{/* Pulsing dot */}
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
						</span>

						<span className="text-sm font-medium text-green-400 tracking-wide">
							Open to Opportunities
						</span>

					</div>
				</div>

				<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
					I build full-stack systems
				</h1>

				<p className="text-xl text-slate-400 max-w-2xl mb-8">
					I’m Alex — a Computer Science senior at the University of Minnesota specializing in
					production-ready web apps and machine-learning powered platforms
				</p>

				<div className="flex gap-4">
					<a
						href="/alex_resume.pdf"
						download
						className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium"
					>
						View Resume
					</a>

					<Link
						to="/projects"
						className="px-6 py-3 rounded-xl border border-slate-500 text-slate-300 hover:border-blue-400 hover:text-white transition"
					>
						View Projects
					</Link>
				</div>
			</section>

			{/* ================= ABOUT ================= */}
			<section className="max-w-4xl mx-auto px-6 py-16">
				<h2 className="text-2xl font-bold mb-6">About Me</h2>

				<p className="text-slate-400 mb-4">
					I’m a Computer Science senior at the University of Minnesota (May 2026) with experience
					across full-stack engineering, cloud deployment, and machine learning
				</p>

				<p className="text-slate-400">
					I specialize in taking products from idea → architecture → UI → backend → deployment —
					building systems that are reliable, scalable, and actually used by real people
				</p>
			</section>

			{/* ================= SKILLS ================= */}
			<section className="max-w-6xl mx-auto px-6 py-16">
				<h2 className="text-2xl font-bold text-center mb-2">
					Technical Skills
				</h2>

				<p className="text-center text-slate-400 mb-10">
					Tools and technologies I use to build full-stack and machine-learning-powered products.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

					{/* Frontend */}
					<div className="rounded-2xl p-6 border border-blue-500/40 bg-black/40 backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">
						<h3 className="text-lg font-semibold mb-1 text-blue-400">Frontend</h3>
						<p className="text-xs text-slate-400 mb-5">
							Designing and building responsive, production UIs
						</p>
						<div className="flex flex-wrap gap-2 justify-center">
							{["React", "Next.js", "Vue", "Tailwind", "HTML", "CSS"].map(t => (
								<span key={t} className="px-3 py-1 rounded-full border border-slate-500 text-xs text-slate-300">
									{t}
								</span>
							))}
						</div>
					</div>

					{/* Backend */}
					<div className="rounded-2xl p-6 border border-emerald-500/40 bg-black/40 backdrop-blur shadow-lg hover:shadow-emerald-500/20 transition">
						<h3 className="text-lg font-semibold mb-1 text-emerald-400">Backend</h3>
						<p className="text-xs text-slate-400 mb-5">
							Building secure, scalable backend services
						</p>
						<div className="flex flex-wrap gap-2 justify-center">
							{["Node", "Express", "Django", "REST APIs", "Auth0", "Firebase"].map(t => (
								<span key={t} className="px-3 py-1 rounded-full border border-slate-500 text-xs text-slate-300">
									{t}
								</span>
							))}
						</div>
					</div>

					{/* Databases */}
					<div className="rounded-2xl p-6 border border-purple-500/40 bg-black/40 backdrop-blur shadow-lg hover:shadow-purple-500/20 transition">
						<h3 className="text-lg font-semibold mb-1 text-purple-400">Databases</h3>
						<p className="text-xs text-slate-400 mb-5">
							Modeling and managing application data
						</p>
						<div className="flex flex-wrap gap-2 justify-center">
							{["PostgreSQL", "Supabase", "Firestore"].map(t => (
								<span key={t} className="px-3 py-1 rounded-full border border-slate-500 text-xs text-slate-300">
									{t}
								</span>
							))}
						</div>
					</div>

				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">

					{/* ML */}
					<div className="rounded-2xl p-6 border border-pink-500/40 bg-black/40 backdrop-blur shadow-lg hover:shadow-pink-500/20 transition">
						<h3 className="text-lg font-semibold mb-1 text-pink-400">Machine Learning</h3>
						<p className="text-xs text-slate-400 mb-5">
							Training, evaluating, and integrating predictive models
						</p>
						<div className="flex flex-wrap gap-2 justify-center">
							{["PyTorch", "Scikit-Learn", "LightGBM", "NumPy", "Pandas"].map(t => (
								<span key={t} className="px-3 py-1 rounded-full border border-slate-500 text-xs text-slate-300">
									{t}
								</span>
							))}
						</div>
					</div>

					{/* DevOps */}
					<div className="rounded-2xl p-6 border border-orange-500/40 bg-black/40 backdrop-blur shadow-lg hover:shadow-orange-500/20 transition">
						<h3 className="text-lg font-semibold mb-1 text-orange-400">DevOps & Tools</h3>
						<p className="text-xs text-slate-400 mb-5">
							Shipping and maintaining live systems
						</p>
						<div className="flex flex-wrap gap-2 justify-center">
							{["AWS", "Vercel", "Render", "Git", "CI/CD"].map(t => (
								<span key={t} className="px-3 py-1 rounded-full border border-slate-500 text-xs text-slate-300">
									{t}
								</span>
							))}
						</div>
					</div>

				</div>
			</section>

			{/* ================= CTA ================= */}
			<section className="max-w-4xl mx-auto px-6 py-20 text-center">
				<h2 className="text-3xl font-bold mb-4">
					Let’s build something meaningful
				</h2>
				<p className="text-slate-400 mb-6">
					I’m actively looking for software engineering roles — internships or full-time
				</p>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gardu022@umn.edu&su=Opportunity&body=Hi%20Alex,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium"
                >
                    Get in touch
                </a>
			</section>

		</div>
	)
}
