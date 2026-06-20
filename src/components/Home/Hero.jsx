import profile from "../../static/images/alex.png"
import { Link } from "react-router-dom"

export default function Hero() {
    return (
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
                I’m Alex — a Computer Science graduate from the University of Minnesota (Twin Cities) specializing in
                production-ready web apps
            </p>

            <div className="flex gap-4">
                <a
                    href="/Resume.pdf"
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
    )
}
