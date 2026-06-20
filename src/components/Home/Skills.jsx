import Skill from "./Skill"

export default function Skills() {
    const frontend = {
        title: "Frontend",
        description: "Designing and building responsive, production UIs",
        skills: ["React.js", "Next.js", "Vue.js", "Tailwind", "HTML", "CSS"],
    }

    const backend = {
        title: "Backend",
        description: "Building secure, scalable backend services",
        skills: ["Node", "Express", "Django", "REST APIs", "Auth0", "Firebase"],
    }

    const db = {
        title: "Databases",
        description: "Modeling and managing application data",
        skills: ["PostgreSQL", "Supabase", "Firestore"],        
    }

    const ml = {
        title: "Machine Learning",
        description: "Training, evaluating, and integrating predictive models",
        skills: ["PyTorch", "Scikit-Learn", "LightGBM", "NumPy", "Pandas"],        
    }

    const devOps = {
        title: "DevOps & Tools",
        description: "Shipping and maintaining live systems",
        skills: ["AWS", "Vercel", "Render", "Git", "GitLab" ,"Github", "CI/CD"],        
    }

    const skillList = [frontend, backend, db, ml, devOps];

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-center mb-2">
                Technical Skills
            </h2>

            <p className="text-center text-slate-400 mb-10">
                Tools and technologies I use to build full-stack and machine-learning-powered products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillList.map((skill,idx) => (
                    <Skill 
                        key={idx}
                        title={skill.title}
                        description={skill.description}
                        skills={skill.skills}
                    />
                ))}
            </div>
        </section>        
    )
}