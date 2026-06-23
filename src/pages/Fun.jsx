import flower from "../static/photos/IMG_4298.jpg";
import firefly from "../static/photos/IMG_4327.jpg";
import shadow from "../static/photos/IMG_4368 (1).jpg";
import sun from "../static/photos/IMG_4370 (1).jpg";

import Photo from "../components/Fun/Photo";

export default function Fun() {
	const photos = [
		{ src: flower, title: "Flower" },
		{ src: firefly, title: "Firefly" },
		{ src: shadow, title: "Shadow" },
		{ src: sun, title: "Sunset" },
	];

	return (
		<section className="min-h-screen text-slate-900 px-5 sm:px-8 lg:px-16 py-20 rounded-lg">
			<div className="max-w-6xl mx-auto">

				{/* Hero */}
				<div className="max-w-3xl mx-auto text-center mb-16">
					<p className="text-sm uppercase tracking-[0.3em] text-amber-200 mb-4">
						Photography
					</p>

					<p className="mt-6 text-slate-300 sm:text-lg leading-relaxed">
						A small collection of some of my favorite shots. I enjoy
						capturing light, shadows, colors, and moments that tell a story.
					</p>
				</div>

				{/* Gallery */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{photos.map((photo, idx) => (
						<Photo
							key={photo.title}
							photo={photo.src}
							title={photo.title}
							number={String(idx + 1).padStart(2, "0")}
						/>
					))}
				</div>

			</div>
		</section>
	);
}