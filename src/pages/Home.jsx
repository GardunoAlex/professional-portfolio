import profile from "../static/images/alex.png"

export default function Home() {
	return (
		<div className="w-full p-5">
			<div className="max-w-4xl mx-auto px-4 pt-8 flex flex-col justify-center">

                <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white-500 to-blue-500 blur-2xl opacity-50 scale-110" />
                    <img 
                        src={profile} 
                        alt="Alex" 
                        className="relative w-full h-full rounded-full object-cover scale-110"
                        style={{ 
                            objectFit: 'cover',  
                            objectPosition: "70% 0%"  
                        }}
                    />
                </div>

				
				<h1 className="text-4xl font-bold text-center mb-2 ">
					Hi, I'm Alex
				</h1>
				
				<p className="text-xl text-center text-slate-400 mb-8">
					Full Stack Software Engineer & ML Developer
				</p>
			</div>

			<section className="max-w-4xl mx-auto px-4 py-8 flex flex-col justify-center">
				<h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="mb-4 text-slate-400">
                    I’ll be graduating from the University of Minnesota, Twin Cities in May 2026 with a Bachelor’s degree in Computer Science.
                    My professional experience spans IT, software engineering, and machine learning, giving me a strong foundation in how technology moves from infrastructure to real-world, user-facing products.
                </p>

                <p className="mb-4 text-slate-400">
                    I care deeply about building software that is not only technically strong, but also intuitive, reliable, and genuinely useful to the people who depend on it.
                    I enjoy taking ideas from concept to production — designing systems, building interfaces, and deploying applications that people can actually use.
                </p>

                <p className="font-bold text-slate-400 text-lg">
                    I’m currently seeking software engineering opportunities where I can contribute to impactful products while continuing to grow as a full-stack engineer.
                </p>
			</section>

            
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-2 text-center">
                    Technical Skills
                </h2>
                <p className="text-center text-slate-400 mb-8">
                    Tools and technologies I use to build full-stack and machine-learning-powered products.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                    {/* Frontend */}
                    <div className="rounded-2xl p-5 border border-blue-500/40  backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">
                        <h3 className="text-lg font-semibold mb-1">Frontend</h3>
                        <p className="text-xs text-slate-400 mb-5">
                            Designing and building responsive, production UIs
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["React.js","Next.js","Vue.js","Tailwind","HTML","CSS"].map(t => (
                                <span key={t} className="px-3 py-1 rounded-full text-slate-300 border border-slate-400 text-xs ">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="rounded-2xl p-5 border border-emerald-500/30  backdrop-blur shadow-lg hover:shadow-emerald-500/20 transition">
                        <h3 className="text-lg font-semibold mb-1">Backend</h3>
                        <p className="text-xs text-slate-400 mb-5">
                            Building secure, scalable backend services
                        </p>                        
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Node","Express","Django","REST APIs","Auth0","Firebase Auth"].map(t => (
                                <span key={t} className="px-3 py-1 rounded-full text-slate-300 border border-slate-400 text-xs">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="rounded-2xl p-5 border border-purple-500/30 backdrop-blur shadow-lg hover:shadow-purple-500/20 transition">
                        <h3 className="text-lg font-semibold mb-1">Databases</h3>
                        <p className="text-xs text-slate-400 mb-5">
                            Modeling and managing application data
                        </p>  
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["PostgreSQL","Supabase","Firestore"].map(t => (
                                <span key={t} className="px-3 py-1 rounded-full text-slate-300 border border-slate-400 text-xs">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-5">
                    {/* Machine Learning */}
                    <div className="rounded-2xl p-5 border border-pink-500/30 backdrop-blur shadow-lg hover:shadow-pink-500/20 transition">
                        <h3 className="text-lg font-semibold mb-1">Machine Learning</h3>
                        <p className="text-xs text-slate-400 mb-5">
                            Training, evaluating, and integrating predictive models
                        </p>                          
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["PyTorch","Scikit-Learn","LightGBM","NumPy","Pandas"].map(t => (
                                <span key={t} className=" px-3 py-1 rounded-full text-slate-300 border border-slate-400 text-xs">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* DevOps */}
                    <div className="rounded-2xl p-5 border border-orange-500/30 backdrop-blur shadow-lg hover:shadow-orange-500/20 transition">
                        <h3 className="text-lg font-semibold mb-1">DevOps & Tools</h3>
                        <p className="text-xs text-slate-400 mb-5">
                            Shipping and maintaining live systems
                        </p>   
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["AWS","Vercel","Render","Git","CI/CD"].map(t => (
                                <span key={t} className="px-3 py-1 rounded-full text-slate-300 border border-slate-400 text-xs">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>



		</div>
	)
}