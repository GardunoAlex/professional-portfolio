import { MapPin } from "lucide-react"

const colorStyles = {
  blue: {
    card: "border-blue-500/30 bg-blue-500/5 shadow-blue-500/10 hover:shadow-blue-500/40",
    skill: "bg-blue-500/20 border-blue-500/40",
  },
  emerald: {
    card: "border-emerald-500/30 bg-emerald-500/5 shadow-emerald-500/10 hover:shadow-emerald-500/40",
    skill: "bg-emerald-500/20 border-emerald-500/40",
  },
  zinc: {
    card: "border-zinc-800 bg-zinc-900/20 shadow-zinc-500/10 hover:shadow-zinc-500/30",
    skill: "bg-zinc-800/60 border-zinc-700",
  },
};

export default function ExperienceCard(props) {
  const color = colorStyles[props.color] ?? colorStyles.zinc;

  return (
    <div className="relative flex items-center px-4 sm:px-8 md:px-12 py-6 md:py-10">
      <div
        className={`w-full border rounded-2xl p-4 sm:p-6 shadow-lg ${color.card}`}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4 min-w-0">
            <img
              src={props.image}
              alt={props.orgName}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-contain bg-white p-1 shrink-0"
            />

            <div className="min-w-0">
              <h1 className="font-semibold text-base text-left sm:text-lg break-words">
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
          <h2 className="text-lg sm:text-xl font-medium">{props.headliner}</h2>

          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-400">
            {props.bullets.map((bullet, idx) => (
              <li key={`${bullet}-${idx}`}>{bullet}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4">
            {props.skills.map((skill, idx) => (
              <span
                key={`${skill}-${idx}`}
                className={`px-3 py-1 rounded-full text-slate-300 text-xs sm:text-sm border shadow-lg ${color.skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}