export default function Cta() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">
                Let’s build something meaningful
            </h2>
            <p className="text-slate-400 mb-6">
                I’m actively looking for software engineering roles
            </p>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gardu022@umn.edu&su=Opportunity&body=Hi%20Alex,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium"
            >
                Get in touch
            </a>
        </section>
    )
}