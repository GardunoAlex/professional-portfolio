import Skill from "./Skill"

export default function Skills() {
    const fullStack = {
        title: "Full-Stack Development",
        description: "Building responsive user experiences and scalable backend systems",
        skills: [
            "React.js",
            "Next.js",
            "Vue.js",
            "Tailwind",
            "Node",
            "Express",
            "Django",
            "REST APIs",
            "Auth0",
            "Firebase",
            "Supabase",
        ],
    };
    
    const dataMl = {
        title: "Data & Machine Learning",
        description: "Developing data pipelines and production ML solutions",
        skills: [
            "PyTorch",
            "Scikit-Learn",
            "LightGBM",
            "NumPy",
            "Pandas",
            "PostgreSQL",
        ],
    };
    
    const cloudDevOps = {
        title: "Cloud & DevOps",
        description: "Deploying, monitoring, and maintaining production applications",
        skills: [
            "AWS",
            "Vercel",
            "Render",
            "Git",
            "GitHub",
            "GitLab",
            "CI/CD",
        ],
    };
    
    const skillList = [fullStack, dataMl, cloudDevOps];

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