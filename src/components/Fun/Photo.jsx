export default function Photo({ photo, title, number }) {
	return (
		<div className="group relative overflow-hidden rounded-3xl shadow-lg border border-white">
			<img
				src={photo}
				alt={title}
				className="
					w-full
					h-full
					sm:h-[450px]
					object-cover
					transition
					duration-500
					group-hover:scale-105
				"
			/>

			<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

			<div className="absolute bottom-0 left-0 right-0 p-6">
				<p className="text-xs tracking-[0.25em] text-blue-200 mb-1">
					{number}
				</p>

				<h2 className="text-white text-2xl font-medium">
					{title}
				</h2>
			</div>
		</div>
	);
}