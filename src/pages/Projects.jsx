import react from "../static/logos/react.png"
import express from "../static/logos/express.png"
import node from "../static/logos/node.png"
import postgres from "../static/logos/postgres.png"
import supa from "../static/logos/supa.jpeg"
import vercel from "../static/logos/vercel.png"
import render from "../static/logos/render.png"
import tailwind from "../static/logos/tailwind.png"
import vue from "../static/logos/vue.png"
import firebase from "../static/logos/firebase.png"
import typescript from "../static/logos/typescript.png"
import ssp from "../static/images/ssp.png"
import medimate from "../static/images/medimate.png"
import diccionario from "../static/images/diccionario.png"

export default function Projects() {
	return (
		<div className="w-full">
			<section className="w-full">

				{/* StudentStarter+ */}
				<div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-5 sm:px-8 lg:px-12 py-10 lg:py-16">
					<div className="space-y-5 flex-1 max-w-xl text-center lg:text-left">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
							StudentStarter+
						</h1>

						<div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
							<p>
								StudentStarter+ is the most ambitious project I've worked on so far. It's a platform designed to connect students — especially those from underrepresented backgrounds — with curated early-career opportunities such as mentorships, fellowships, and internships.
							</p>
							<p>
								Working alongside a product manager and another developer, I serve as a full-stack engineer with a strong focus on the backend. I've architected and implemented core parts of the system including the database, authentication, and REST APIs that power the platform.
							</p>
							<p>
								The project is currently supporting a live pilot, with organizations posting opportunities and students actively saving and applying to them.
							</p>
						</div>

						<div className="flex flex-wrap gap-4 justify-center lg:justify-start">
							{[react, express, node, postgres, supa, vercel, render, tailwind].map((logo, index) => (
								<img
									key={index}
									src={logo}
									alt="tech logo"
									className="rounded-full w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-cover"
								/>
							))}
						</div>
					</div>

					<ProjectImage
						href="https://ssp-phi-ivory.vercel.app/"
						src={ssp}
						alt="StudentStarter+ live preview"
					/>
				</div>

				{/* Medimate */}
				<div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-5 sm:px-8 lg:px-12 py-10 lg:py-16">
					<div className="order-2 lg:order-1">
						<ProjectImage
							href="https://project2-e9097.web.app/"
							src={medimate}
							alt="medimate preview"
							imageClass="object-cover object-top"
						/>
					</div>

					<div className="space-y-5 flex-1 max-w-xl order-1 lg:order-2 text-center lg:text-left">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
							Medimate
						</h1>

						<div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
							<p>
								Medimate is a medication tracking web application designed to help users stay organized through real-time inventory tracking, geolocation-aware reminders, and scheduled notifications.
							</p>
							<p>
								Built by a team of four, I worked as a full-stack developer with a primary focus on the medication management system, where I implemented the full CRUD workflow for adding, editing, and managing prescriptions.
							</p>
							<p>
								The application uses Vue.js, Firebase Authentication, and Firestore to provide secure, real-time syncing across devices.
							</p>
						</div>

						<div className="flex flex-wrap gap-4 justify-center lg:justify-start">
							{[vue, firebase].map((logo, index) => (
								<img
									key={index}
									src={logo}
									alt="tech logo"
									className="rounded-full w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-cover"
								/>
							))}
						</div>
					</div>
				</div>

				{/* Diccionario */}
				<div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-5 sm:px-8 lg:px-12 py-10 lg:py-16">
					<div className="space-y-5 flex-1 max-w-xl text-center lg:text-left">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
							Diccionario
						</h1>

						<div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
							<p>
								Diccionario is a collaborative dictionary platform designed to help preserve and revitalize Indigenous languages in Colombia.
							</p>
							<p>
								I worked on a five-person engineering team as a full-stack developer with a backend focus. My primary responsibility was migrating the application from a local SQL database to Supabase using TypeScript.
							</p>
							<p>
								I also helped deploy the platform across Render and Vercel, establishing a production-ready infrastructure.
							</p>
						</div>

						<div className="flex flex-wrap gap-4 justify-center lg:justify-start">
							{[typescript, express, node, postgres, supa, vercel, render].map((logo, index) => (
								<img
									key={index}
									src={logo}
									alt="tech logo"
									className="rounded-full w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-cover"
								/>
							))}
						</div>
					</div>

					<ProjectImage
						href="https://diccionarioweb.vercel.app/"
						src={diccionario}
						alt="diccionario preview"
					/>
				</div>
			</section>
		</div>
	);
}

function ProjectImage({ href, src, alt, imageClass = "" }) {
	return (
		<div className="flex justify-center flex-1 w-full max-w-2xl transition lg:hover:scale-105">
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				className="group relative block w-full overflow-hidden rounded-2xl sm:rounded-3xl"
			>
				<img
					src={src}
					alt={alt}
					className={`w-full aspect-video rounded-2xl sm:rounded-3xl shadow-2xl object-cover ${imageClass}`}
					loading="lazy"
				/>

				<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm tracking-wide">
					View Live →
				</div>
			</a>
		</div>
	);
}