export default function Skill(props) {
    return (
        <div className="rounded-2xl p-6 border border-blue-500/40 bg-black/40 backdrop-blur shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-lg font-semibold mb-1 text-blue-400">{props.title}</h3>
            <p className="text-xs text-slate-400 mb-5">
                {props.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
                {props.skills.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full border border-slate-500 text-xs text-slate-300">
                        {t}
                    </span>
                ))}
            </div>
        </div>        
    )
}