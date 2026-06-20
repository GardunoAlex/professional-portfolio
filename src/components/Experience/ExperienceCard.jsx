import { MapPin } from "lucide-react"

export default function ExperienceCard(props) {
    return (
        <div className="relative flex items-center px-4 sm:px-8 md:px-12 py-6 md:py-10">
            <div
                className={`w-full border border-${props.color}-500/30 bg-${props.color}-500/5 rounded-2xl p-4 sm:p-6 shadow-lg shadow-${props.color}-500/10 hover:shadow-${props.color}-500/40`}
            >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4 min-w-0">
                        <img
                        src={props.image}
                        alt={props.orgName}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain bg-white p-1 shrink-0"
                        />

                        <div className="min-w-0">
                        <h1 className="font-semibold text-base sm:text-lg break-words">
                            {props.title}
                        </h1>
                        <h3 className="text-slate-400 text-sm sm:text-base text-left break-words">
                            {props.orgName}
                        </h3>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
                        <span>{props.date}</span>
                        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{props.location}</span>
                    </div>
                </div>

                <div className="space-y-4 max-w-4xl text-left">
                    <h2 className="text-lg sm:text-xl font-medium">
                        {props.headliner}
                    </h2>

                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-400">
                        {props.bullets.map((bullet, idx) => (
                        <li key={`${bullet}-${idx}`}>{bullet}</li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                        {props.skills.map((skill, idx) => (
                        <span
                            key={`${skill}-${idx}`}
                            className={`px-3 py-1 rounded-full text-slate-300 text-xs sm:text-sm border border-zinc-700 bg-${props.color}-500/40`}
                        >
                            {skill}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}