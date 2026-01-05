import profile from "../static/images/alex.png"

export default function Home() {
	return (
		<div className="w-full p-5">
			<div className="max-w-4xl mx-auto px-4 py-8 flex flex-col justify-center">

                <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white-500 to-blue-500 blur-2xl opacity-50 scale-110" />
                    <img 
                        src={profile} 
                        alt="Alex" 
                        className="relative w-full h-full rounded-full object-cover scale-110"
                        style={{ 
                            objectFit: 'cover',  // Add this explicitly in inline style
                            objectPosition: "70% 0%"  // Try vertical shift instead
                        }}
                    />
                </div>

				
				<h1 className="text-4xl font-bold text-center mb-2">
					Hi, I'm Alex
				</h1>
				
				<p className="text-xl text-center text-gray-600 mb-8">
					Full Stack Software Engineer & ML Developer
				</p>
			</div>

			<section className="max-w-4xl mx-auto px-4 py-8 flex flex-col justify-center">
				<h2 className="text-2xl font-bold mb-4">About Me</h2>
				<p className="mb-4">
					I'll be graduating from the University of Minnesota, Twin Cities in May 2026 with a Bachelor's degree in Computer Science. 
                    My professional experience spans IT, software engineering, and machine learning, giving me a strong foundation in how technology moves from infrastructure to real-world, user-facing products. 
                    
				</p>
                    I care deeply about building software that is not only technically strong, but also intuitive, reliable, and genuinely useful to the people who depend on it. 
                    I enjoy taking ideas from concept to production — designing systems, building interfaces, and deploying applications that people can actually use. 
                    I'm currently seeking software engineering opportunities where I can contribute to impactful products while continuing to grow as a full-stack engineer.
                <p>

                </p>
			</section>


            <div className="flex flex-row justify-center gap-5">
                <div className="h-30 w-100  border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-3 shadow-lg shadow-emerald-500/10">
                    <div>
                        <h1>Frontend</h1>
                    </div>

                    <div>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">React.js</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Next.js</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Vue.js</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Tailwind</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">HTML</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">CSS</span>
                        
                        
                    </div>
                    
                </div>

                <div className="h-30 w-100  border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-3 shadow-lg shadow-emerald-500/10">
                    <div>
                        <h1>Backend</h1>
                    </div>

                    <div>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Node</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Express</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Django</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">REST APIs</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Auth0 | Firebase Auth </span>
                    </div>
                    
                </div>


                <div className="h-30 w-100  border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-3 shadow-lg shadow-emerald-500/10">
                    <div>
                        <h1>Databases</h1>
                    </div>

                    <div>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">PostgreSQL</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Supabase</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Firestore</span>
                    </div>
                    
                </div>
            </div>


            <div className="flex flex-row justify-center gap-5 p-5">
                <div className="h-30 w-100  border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-3 shadow-lg shadow-emerald-500/10">
                    <div>
                        <h1>Machine Learning</h1>
                    </div>

                    <div>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">PyTorch</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Scikit-Learn</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">LightGBM</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">NumPy</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Pandas</span>
                    </div>
                    
                </div>


                <div className="h-30 w-100  border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-3 shadow-lg shadow-emerald-500/10">
                    <div>
                        <h1>DevOps and Tools</h1>
                    </div>

                    <div>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">AWS</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Vercel</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Render</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">Git</span>
                        <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">CI/CD</span>
                    </div>
                    
                </div>
            </div>

		</div>
	)
}