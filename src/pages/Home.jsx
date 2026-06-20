import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import Skills from "../components/Home/Skills"
import Cta from "../components/Home/Cta"

export default function Home() {
	return (
		<div className="w-full min-h-screen">
			<Hero />
			<About />
			<Skills />
			<Cta />
		</div>
	)
}
