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

export default function Projects(){
    return (
        <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory">

            <section className="w-screen min-h-screen snap-start flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-6xl font-bold">Projects That Ship</h1>
                </div>
            </section>

            <section>

                <div className="w-screen min-h-screen snap-start flex items-center justify-center gap-24">
                    <div className="space-y-4 space-x-4">
                        <div>
                            <h1 className="text-5xl">StudentStarter+</h1>
                        </div>

                        <div>
                            <p className="text-zinc-400 max-w-180">
                                StudentStarter+ is the most ambitious project I’ve worked on so far. It’s a platform designed to connect students — especially those from underrepresented backgrounds — with curated early-career opportunities such as mentorships, fellowships, and internships.
                                Working alongside a product manager and another developer, I serve as a full-stack engineer with a strong focus on the backend. I’ve architected and implemented core parts of the system including the database, authentication, and REST APIs that power the platform.
                                The project is currently supporting a live pilot, with organizations posting opportunities and students actively saving and applying to them. 
                            </p>
                        </div>

                        
                        <div className="flex gap-5 justify-center">
                            <img 
                                src={react} 
                                alt="react logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={express} 
                                alt="express logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={node} 
                                alt="node logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={postgres} 
                                alt="postgresql logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={supa} 
                                alt="supabase logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={vercel} 
                                alt="vercel logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={render} 
                                alt="render logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={tailwind} 
                                alt="tailwind logo" 
                                className="rounded-full w-14 h-14"
                            />
                        </div>
                        
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={ssp}
                            alt="StudentStarter+ live preview"
                            className="w-full max-w-3xl aspect-video rounded-3xl shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                </div>


                <div className="w-screen min-h-screen snap-start flex items-center justify-center gap-24">

                    <div className="flex justify-center">
                        <img
                            src={medimate}
                            alt="medimate live preview"
                            className="w-full max-w-3xl aspect-video object-cover object-top rounded-3xl shadow-2xl"
                            loading="lazy"
                        />
                    </div>

                    <div className="space-y-4 space-x-4">
                        <div>
                            <h1 className="text-5xl">Medimate</h1>
                        </div>

                        <div>
                            <p className="text-zinc-400 max-w-180">
                                Medimate is a medication tracking web application designed to help users stay organized through real-time inventory tracking, geolocation-aware reminders, and scheduled notifications.
                                Built by a team of four, I worked as a full-stack developer with a primary focus on the medication management system, where I implemented the full CRUD workflow for adding, editing, and managing prescriptions. 
                                This included designing Firestore data models, building Vue.js forms and views, and wiring everything together with VueFire’s real-time bindings.
                                The application uses Vue.js, Firebase Authentication, and Firestore to provide secure, real-time syncing across devices, ensuring users always see the most up-to-date medication and inventory information.
                            </p>
                        </div>
 
                        <div className="flex gap-5 justify-center">
                            <img 
                                src={vue} 
                                alt="vue logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={firebase} 
                                alt="firebase logo" 
                                className="rounded-full w-14 h-14"
                            />

                        </div>
                        
                    </div>
                </div>


                <div className="w-screen min-h-screen snap-start flex items-center justify-center gap-24">
                    <div className="space-y-4 space-x-4">
                        <div>
                            <h1 className="text-5xl">Diccionario</h1>
                        </div>

                        <div>
                            <p className="text-zinc-400 max-w-180">
                                Diccionario is a collaborative dictionary platform designed to help preserve and revitalize Indigenous languages in Colombia. Built in partnership with the University of Antioquia, the project supports linguists and students in documenting, translating, and sharing native languages through a modern web interface.
                                I worked on a five-person engineering team as a full-stack developer with a backend focus. My primary responsibility was migrating the application from a local SQL database to Supabase (PostgreSQL) using TypeScript, ensuring a secure, scalable data layer for authentication, dictionary entries, and user roles.
                                I also helped deploy the platform across Render (backend) and Vercel (frontend), establishing a production-ready infrastructure that allows collaborators to access the system remotely.
                            </p>
                        </div>

                        
                        <div className="flex gap-5 justify-center">
                            <img 
                                src={typescript} 
                                alt="react logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={express} 
                                alt="express logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={node} 
                                alt="node logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={postgres} 
                                alt="postgresql logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={supa} 
                                alt="supabase logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={vercel} 
                                alt="vercel logo" 
                                className="rounded-full w-14 h-14"
                            />

                            <img 
                                src={render} 
                                alt="render logo" 
                                className="rounded-full w-14 h-14"
                            />
                        </div>
                        
                    </div>

                    <div className="flex justify-center">
                        <img
                            src={ssp}
                            alt="StudentStarter+ live preview"
                            className="w-full max-w-3xl aspect-video rounded-3xl shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                </div>

            </section>

        </div>
    )
}   