import lat from "../static/images/lat.png"
import stearns from "../static/images/stearns.png"
import cse from "../static/images/cse.jpeg"
import collab from "../static/images/collab.jpeg"
import ctg from "../static/images/ctg.jpeg"
import rec from "../static/images/rec.png"
import { MapPin } from "lucide-react"

export default function Experience() {
	return (
		<div className="relative w-full p-3">

			{/* Timeline spine */}
			<div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800" />

            <div className="relative flex items-center px-12 py-10">
                <div className="absolute left-1 w-4 h-4 rounded-full bg-emerald-400 border border-emerald-300" />

                <div className="w-full border border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-6 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/40">

                    <div className="flex justify-between items-center mb-6">

                        <div className="flex items-center gap-4">
                            <img
                                src={cse}
                                alt="University of Minnesota"
                                className="w-14 h-14 rounded-xl object-contain bg-white p-1"
                            />

                            <div>
                                <h1 className="font-semibold text-lg">University of Minnesota – Twin Cities</h1>
                                <h3 className="text-slate-400 text-left">Bachelor of Arts in Computer Science</h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-sm">
                            <span>Expected May 2026</span>
                            <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                            <MapPin className="w-4 h-4" />
                            <span>Minneapolis, MN</span>
                        </div>

                    </div>

                    <div className="space-y-4 max-w-4xl text-left">
                        <h2 className="text-xl font-medium">
                            Computer Science student focused on software engineering and machine learning
                        </h2>

                        <ul className="list-disc list-inside space-y-2 text-slate-400">
                            <li>Wallin Scholar and Teaching Assistant for Computational Linear Algebra</li>
                            <li>Relevant coursework: Machine Learning, Computer Architecture, Linear Algebra, Algorithms, Web Development</li>
                            <li>Built production-grade full-stack and ML-powered applications alongside academic work</li>
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4">
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Machine Learning</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Linear Algebra</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Computer Architecture</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Algorithms</span>
                        </div>
                    </div>

                </div>
            </div>


            <h1 className="text-2xl">2026</h1>

			{/* ======================= Local Arena Tix ======================= */}
			<div className="relative flex items-center px-12 py-10">
				<div className="absolute left-1 w-4 h-4 rounded-full bg-blue-500 border border-blue-400" />
                

				<div className="w-full">
					<div className="w-full border border-blue-500/40 bg-blue-500/5 rounded-2xl p-6 shadow-blue-500/10 shadow-lg hover:shadow-blue-500/40">

						{/* Header */}
						<div className="flex justify-between items-center mb-6">

							{/* Left */}
							<div className="flex items-center gap-4">
								<img
									src={lat}
									alt="Local Arena Tix logo"
									className="w-14 h-14 rounded-xl object-contain bg-white p-1"
								/>

								<div>
									<h1 className="font-semibold text-lg text-left">Full Stack Software Engineering Intern</h1>
									<h3 className="text-slate-400 text-left">Local Arena Tix</h3>
								</div>
							</div>

							{/* Right */}
							<div className="flex items-center gap-3 text-sm">
								<span>Oct 2025 – Present</span>
								<span className="w-1 h-1 bg-zinc-600 rounded-full" />
								<MapPin className="w-4 h-4" />
								<span>Remote (CA)</span>
							</div>

						</div>

						{/* Description */}
						<div className="space-y-4 text-left max-w-4xl">
							<h2 className="text-xl font-medium">
								Full-Stack Engineer building ML-powered pricing systems for a live sports-ticket marketplace
							</h2>

							<ul className="list-disc list-inside space-y-2 text-slate-400">
								<li>
									Built and shipped ML-powered pricing features into a production Next.js + Django platform used by hundreds of users
								</li>
								<li>
									Integrated a LightGBM price prediction model directly into the UI, APIs, and backend workflows
								</li>
								<li>
									Tuned and validated machine-learning models using real marketplace data to improve prediction accuracy
								</li>
								<li>
									Developed full-stack features across React (Next.js), Django REST APIs, and PostgreSQL
								</li>
								<li>
									Responded to live production issues and emergency bug fixes, ensuring platform reliability
								</li>
								<li>
									Worked within a CI/CD workflow using pull requests, preview environments, and main-branch deployments
								</li>
							</ul>
						</div>


                        <div className="flex flex-wrap gap-2 pt-8">
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Python</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Next.js/React.js</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Django</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">PostgreSQL</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">AWS</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">LightGBM</span>
                        </div>

					</div>
				</div>
			</div>

			{/* ======================= Stearns Bank ======================= */}
			<div className="relative flex items-center px-12 py-10">
				<div className="absolute left-1 w-4 h-4 rounded-full bg-zinc-700 border border-zinc-600" />

				<div className="w-full">
					<div className="w-full border border-zinc-800 rounded-2xl p-6 shadow-xs hover:shadow-white">

						{/* Header */}
						<div className="flex justify-between items-center mb-6">

							{/* Left */}
							<div className="flex items-center gap-4">
								<img
									src={stearns}
									alt="Stearns logo"
									className="w-14 h-14 rounded-xl object-contain bg-white p-1"
								/>

								<div>
									<h1 className="font-semibold text-lg text-left">IT Intern</h1>
									<h3 className="text-slate-400 text-left">Stearns Bank</h3>
								</div>
							</div>

							{/* Right */}
							<div className="flex items-center gap-3 text-sm">
								<span>June 2025 – October 2025</span>
								<span className="w-1 h-1 bg-zinc-600 rounded-full" />
								<MapPin className="w-4 h-4" />
								<span>St.Cloud, MN</span>
							</div>

						</div>

						{/* Description */}
						<div className="space-y-4 text-left max-w-4xl">
							<h2 className="text-xl font-medium">
								IT Support Intern managing enterprise Windows migrations and endpoint systems
							</h2>

							<ul className="list-disc list-inside space-y-2 text-slate-400">
								<li>
									Led the migration of 40+ employee laptops from Windows 10 to Windows 11, ensuring data integrity and minimal downtime
								</li>
								<li>
									Used ManageEngine Endpoint Central to deploy OS upgrades, monitor device status, and manage endpoint configurations
								</li>
								<li>
									Performed system diagnostics, software troubleshooting, and post-migration validation
								</li>
								<li>
									Worked directly with employees to schedule upgrades, resolve issues, and ensure a smooth transition
								</li>
							</ul>
						</div>


                        <div className="flex flex-wrap gap-2 pt-8">
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Windows OS</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">ManageEngine Endpoint Central</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Hardware & Software Troubleshooting</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Help Desk Support</span>
                        </div>

					</div>
				</div>
			</div>

			{/* ======================= UMN CSE TA ======================= */}
			<div className="relative flex items-center px-12 py-10">
				<div className="absolute left-1 w-4 h-4 rounded-full bg-zinc-700 border border-zinc-600" />

				<div className="w-full">
					<div className="w-full border border-zinc-800 rounded-2xl p-6 shadow-xs hover:shadow-white ">

						{/* Header */}
						<div className="flex justify-between items-center mb-6">

							{/* Left */}
							<div className="flex items-center gap-4">
								<img
									src={cse}
									alt="CSE logo"
									className="w-14 h-14 rounded-xl object-contain bg-white p-1"
								/>

								<div>
									<h1 className="font-semibold text-lg text-left">Teaching Assistant : Computational Linear Algebra</h1>
									<h3 className="text-slate-400 text-left"> University of Minnesota – College of Science & Engineering</h3>
								</div>
							</div>

							{/* Right */}
							<div className="flex items-center gap-3 text-sm">
								<span>January 2025 – May 2025</span>
								<span className="w-1 h-1 bg-zinc-600 rounded-full" />
								<MapPin className="w-4 h-4" />
								<span>Minneapolis, MN</span>
							</div>

						</div>

						{/* Description */}
						<div className="space-y-4 text-left max-w-4xl">
							<h2 className="text-xl font-medium">
								Teaching Assistant supporting computational linear algebra through grading and office hours
							</h2>

							<ul className="list-disc list-inside space-y-2 text-slate-400">
								<li>
									Held weekly office hours to support students with computational linear algebra concepts and assignments
								</li>
								<li>
									Assisted graduate TAs with grading and feedback, ensuring consistency and clarity across coursework
								</li>
								<li>
									Reinforced concepts such as matrix operations, vector spaces, and numerical computation through hands-on problem solving
								</li>
							</ul>
						</div>

                        <div className="flex flex-wrap gap-2 pt-8">
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Lnear Algebra</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Office Hours</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Grading</span>
                        </div>

					</div>
				</div>
			</div>

            <h1 className="text-2xl">2025</h1>

			{/* ======================= Collaboration.ai ======================= */}
			<div className="relative flex items-center px-12 py-10">
				<div className="absolute left-1 w-4 h-4 rounded-full bg-zinc-700 border border-zinc-600" />

				<div className="w-full">
					<div className="w-full border border-zinc-800 rounded-2xl p-6 shadow-xs hover:shadow-white">

						{/* Header */}
						<div className="flex justify-between items-center mb-6">

							{/* Left */}
							<div className="flex items-center gap-4">
								<img
									src={collab}
									alt="collaboration.ai logo"
									className="w-14 h-14 rounded-xl object-contain bg-white p-1"
								/>

								<div>
									<h1 className="font-semibold text-lg text-left">AI Agent Developer</h1>
									<h3 className="text-slate-400 text-left"> Collaboration.ai</h3>
								</div>
							</div>

							{/* Right */}
							<div className="flex items-center gap-3 text-sm">
								<span>November 2024 – December 2024</span>
								<span className="w-1 h-1 bg-zinc-600 rounded-full" />
								<MapPin className="w-4 h-4" />
								<span>Minneapolis, MN</span>
							</div>

						</div>

						{/* Description */}
						<div className="space-y-4 text-left max-w-4xl">
							<h2 className="text-xl font-medium">
								Developed an AI agent that analyzes Instagram engagement and quantifies DE&I metrics using Relevance AI and multi-LLM workflows
							</h2>

							<ul className="list-disc list-inside space-y-2 text-slate-400">
								<li>
									Built and deployed an AI-powered DE&I assessment agent to analyze Instagram engagement data
								</li>
								<li>
									Designed a custom quantitative scoring framework to measure diversity, reach, and community interaction
								</li>
								<li>
									Created a multi-LLM agent workflow using Relevance AI to automate data analysis and reporting
								</li>
								<li>
									Prompt-engineered and tuned LLM behaviors to generate consistent, actionable insights for community managers
								</li>
								<li>
									Integrated the agent into a master system used to evaluate and compare organizational social engagement
								</li>
							</ul>
						</div>

                        <div className="flex flex-wrap gap-2 pt-8">
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Relevance AI</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">LLM prompt engineering</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Multi-agent workflows</span>
                        </div>

					</div>
				</div>
			</div>

			{/* ======================= Code The Gap ======================= */}
			<div className="relative flex items-center px-12 py-10">
				<div className="absolute left-1 w-4 h-4 rounded-full bg-zinc-700 border border-zinc-600" />

				<div className="w-full">
					<div className="w-full border border-zinc-800 rounded-2xl p-6 shadow-xs hover:shadow-white">

						{/* Header */}
						<div className="flex justify-between items-center mb-6">

							{/* Left */}
							<div className="flex items-center gap-4">
								<img
									src={ctg}
									alt="Code the Gap logo"
									className="w-14 h-14 rounded-xl object-contain bg-white p-1"
								/>

								<div>
									<h1 className="font-semibold text-lg text-left">Python Volunteer Instructor</h1>
									<h3 className="text-slate-400 text-left"> Code the Gap - University of Minnesota Twin Cities </h3>
								</div>
							</div>

							{/* Right */}
							<div className="flex items-center gap-3 text-sm">
								<span>January 2024 – May 2024</span>
								<span className="w-1 h-1 bg-zinc-600 rounded-full" />
								<MapPin className="w-4 h-4" />
								<span>Minneapolis, MN</span>
							</div>

						</div>

						{/* Description */}
						<div className="space-y-4 text-left max-w-4xl">
							<h2 className="text-xl font-medium">
								Instructor teaching Python and computational thinking to K–7 students through hands-on coding
							</h2>

							<ul className="list-disc list-inside space-y-2 text-slate-400">
								<li>
									Taught Python fundamentals through interactive, project-based lessons
								</li>
								<li>
									Introduced loops, variables, conditionals, and problem-solving to young learners
								</li>
								<li>
									Adapted lessons to different learning levels and backgrounds
								</li>
							</ul>
						</div>



                        <div className="flex flex-wrap gap-2 pt-8">
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Python</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Teaching</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Mentorships</span>
                        </div>

					</div>
				</div>
			</div>

            <h1 className="text-2xl">2024</h1>

			{/* ======================= RecWell ======================= */}
			<div className="relative flex items-center px-12 py-10">
				<div className="absolute left-1 w-4 h-4 rounded-full bg-zinc-700 border border-zinc-600" />

				<div className="w-full">
					<div className="w-full border border-zinc-800 rounded-2xl p-6 shadow-xs hover:shadow-white">

						{/* Header */}
						<div className="flex justify-between items-center mb-6">

							{/* Left */}
							<div className="flex items-center gap-4">
								<img
									src={rec}
									alt="RecWell logo"
									className="w-14 h-14 rounded-xl object-contain bg-white p-1"
								/>

								<div>
									<h1 className="font-semibold text-lg text-left">Building Manager</h1>
									<h3 className="text-slate-400 text-left">Recreation and Wellness Center - University of Minnesota Twin Cities</h3>
								</div>
							</div>

							{/* Right */}
							<div className="flex items-center gap-3 text-sm">
								<span>November 2022 – Currently</span>
								<span className="w-1 h-1 bg-zinc-600 rounded-full" />
								<MapPin className="w-4 h-4" />
								<span>Minneapolis, MN</span>
							</div>

						</div>

						{/* Description */}
						<div className="space-y-4 text-left max-w-4xl">
							<h2 className="text-xl font-medium">
								Shift lead overseeing large-scale facility operations, staff coordination, and on-site emergency response
							</h2>

							<ul className="list-disc list-inside space-y-2 text-slate-400">
								<li>
									Supervised daily facility operations and coordinated multiple concurrent event setups
								</li>
								<li>
									Acted as shift lead, directing staff and ensuring smooth guest and athlete experiences
								</li>
								<li>
									Responded to on-site incidents and emergencies, making fast, safety-critical decisions
								</li>
							</ul>
						</div>


                        <div className="flex flex-wrap gap-2 pt-8">
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Leadership</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Operations</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Incident Response</span>
                            <span className="px-3 py-1 rounded-full text-slate-300 text-sm border border-zinc-700">Event Setups</span>
                        </div>

					</div>
				</div>
			</div>

            <h1 className="text-2xl mb-5">2022</h1>

		</div>
	)
}
