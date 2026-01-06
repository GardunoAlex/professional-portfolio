import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { Download } from 'lucide-react';

export default function Contact(){
    return (
        <div>
            <div className="justify-center pt-15 space-y-3">
                <h1 className='text-3xl font-bold'>Lets Connect</h1>
                <p>Whether it's a job opportunity or a fun project, I'd love to hear from you!</p>
            </div>

            {/* Contact Cards */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-20">
                    {/* Machine Learning */}
                    <div className="rounded-2xl p-5 border border-blue-500/40 backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">

                        <div className="flex items-center gap-4 mb-4">

                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-blue-400" />
                            </div>

                            {/* Text */}
                            <div className="text-left">
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-xs text-zinc-400">
                                    Best for detailed inquiries
                                </p>
                            </div>

                        </div>

                        <p className="font-mono text-lg group-hover:text-blue-200 transition text-left">
                            gardu022@umn.edu
                        </p>
                    </div>

                    {/* DevOps */}
                    <div className="rounded-2xl p-5 border border-blue-500/30 backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">
                        <div className="flex items-center gap-4 mb-4">

                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                <Github className="w-5 h-5 text-blue-400" />
                            </div>

                            {/* Text */}
                            <div className="text-left">
                                <h3 className="font-semibold">Github</h3>
                                <p className="text-xs text-zinc-400">
                                    Check out my code
                                </p>
                            </div>

                        </div>

                        <p className="font-mono text-lg group-hover:text-blue-200 transition text-left">
                            github.com/GardunoAlex
                        </p>
                    </div>




                    {/* Machine Learning */}
                    <div className="rounded-2xl p-5 border border-blue-500/30 backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">

                        <div className="flex items-center gap-4 mb-4">

                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                <Linkedin className="w-5 h-5 text-blue-400" />
                            </div>

                            {/* Text */}
                            <div className="text-left">
                                <h3 className="font-semibold">LinkedIn</h3>
                                <p className="text-xs text-zinc-400">
                                    Lets connect professionaly
                                </p>
                            </div>

                        </div>

                        <p className="font-mono text-lg group-hover:text-blue-200 transition text-left">
                            linkedin.com/in/alexandergarduno
                        </p>
                    </div>

                    {/* DevOps */}
                    <div className="rounded-2xl p-5 border border-blue-500/30 backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">
                        <div className="flex items-center gap-4 mb-4">

                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                                <MapPinHouse className="w-5 h-5 text-blue-400" />
                            </div>

                            {/* Text */}
                            <div className="text-left">
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-xs text-zinc-400">
                                    Open to relocation
                                </p>
                            </div>

                        </div>

                        <p className="font-mono text-lg group-hover:text-blue-200 transition text-left">
                            Minneapolis, MN
                        </p>
                    </div>
                </div>      
            </div>


            <div className='flex justify-center'>
                <div className="grid grid-cols-1 w-[87%] pb-5">
                    <div className="rounded-2xl p-5 border border-blue-500/30 backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">
                        <div className="items-center justify-center gap-4 mb-4">

                            {/* Text */}
                            <div>
                                <h3 className="font-bold text-2xl m-3">Download My Resume</h3>
                                <p className="text-xs text-zinc-400">
                                    Get a complete overview of my experience, skills, and projects in a nicely formatted PDF.
                                </p>
                            </div>

                        </div>

                        <div className=' flex justify-center'>
                            <div className="flex items-center gap-4 mb-4 border p-5 rounded-full bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/30">
                                <div>
                                    <Download className='text-blue-400'/>
                                </div>
                                <div>
                                    <a href="/alex_resume.pdf" download className='text-blue-400'>Download</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </div>
    )
}