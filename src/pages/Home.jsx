import profile from "../static/images/IMG_6736.JPG"

export default function Home() {
	return (
		<div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">

			<section className="w-screen min-h-screen snap-start flex items-center justify-center">
				<div className="text-center space-y-4">
					<h1 className="text-6xl font-bold">Hi, I'm Alex</h1>
					<h3 className="text-xl text-zinc-400">
						Full Stack Software Engineer
					</h3>
				</div>
			</section>

			<section className="w-screen min-h-screen snap-start flex items-center justify-center gap-24">
				<div className="space-y-4 space-x-4">
					<h1 className="text-5xl font-bold">About Me</h1>
					<p className="text-zinc-400 max-w-180">
						I’ll be graduating from the University of Minnesota, Twin Cities in May 2026 with a Bachelor’s degree in Computer Science.
                        My professional experience spans IT, software engineering, and machine learning, giving me a strong foundation in how technology moves from infrastructure to real-world, user-facing products. 
                        I care deeply about building software that is not only technically strong, but also intuitive, reliable, and genuinely useful to the people who depend on it. 
                        I enjoy taking ideas from concept to production — designing systems, building interfaces, and deploying applications that people can actually use. 
                        <span className="font-bold">
                            I’m currently seeking software engineering opportunities where I can contribute to impactful products while continuing to grow as a full-stack engineer.
                        </span>
                        
                    </p>
				</div>

				<div className="flex justify-center">
					<img
						src={profile}
						className="w-80 aspect-[4/5] rounded-3xl object-cover shadow-xl"
						alt="profile"
					/>
				</div>

			</section>

		</div>
	)
}
