import lat from "../static/images/lat.png"
import stearns from "../static/images/stearns.png"
import cse from "../static/images/cse.jpeg"
import collab from "../static/images/collab.jpeg"
import ctg from "../static/images/ctg.jpeg"
import rec from "../static/images/rec.png"
import fedLogo from "../static/images/fed.jpeg"
import ExperienceCard from "../components/Experience/ExperienceCard"

export default function Experience() {
	const education = {
		color: "emerald",
		image: cse,
		title: "Bachelor of Arts in Computer Science",
		orgName: "University of Minnesota – Twin Cities",
		date: "Graduated in 2026",
		location: "Minneapolis, MN",
		headliner: "Computer Science student focused on software engineering and machine learning",
		bullets: ["Wallin Scholar and Teaching Assistant for Computational Linear Algebra", "Relevant coursework: Machine Learning, Computer Architecture, Linear Algebra, Algorithms, Web Development", "Built production-grade full-stack and ML-powered applications alongside academic work"],
		skills: ["Machine Learning", "Linear Algebra", "Computer Architecture", "Algorithms"]
	}

	const fed = {
		color: "blue",
		image: fedLogo, 
		title: "Software Engineering Intern",
		orgName: "Federal Reserve Bank of Minneapolis",
		date: "June 2026 - Present",
		location: "Minneapolis, MN",
		headliner: "Building Features Across the Full Stack",
		bullets: ["Working on Full Stack Development", "Participate in Agile practices such as standup, refinement, planning, and retro", ],
		skills: ["React.js", "Next.js"]
	}

	const localArenaTix = {
		color: "blue",
		image: lat,
		title: "Full Stack Software Engineer",
		orgName: "Local Arena Tix",
		date: "Oct 2025 – Present",
		location: "Remote (CA)",
		headliner: "Full-Stack Engineer building ML-powered pricing systems for a live sports-ticket marketplace",
		bullets: ["Built and shipped ML-powered pricing features into a production Next.js + Django platform used by hundreds of users", "Integrated a LightGBM price prediction model directly into the UI, APIs, and backend workflows", 
		"Tuned and validated machine-learning models using real marketplace data to improve prediction accuracy", "Developed full-stack features across React (Next.js), Django REST APIs, and PostgreSQL", 
		"Worked within a CI/CD workflow using pull requests, preview environments, and main-branch deployments"],
		skills: ["Python", "Next.js/React.js", "Django", "PostgreSQL", "AWS", "LightGBM"]
	}

	const stearnsBank = {
		color: "white",
		image: stearns,
		title: "IT Intern",
		orgName: "Stearns Bank",
		date: "June 2025 – October 2025",
		location: "St. Cloud, MN",
		headliner: "IT Support Intern managing enterprise Windows migrations and endpoint systems",
		bullets: [
		  "Led the migration of 40+ employee laptops from Windows 10 to Windows 11, ensuring data integrity and minimal downtime",
		  "Used ManageEngine Endpoint Central to deploy OS upgrades, monitor device status, and manage endpoint configurations",
		  "Performed system diagnostics, software troubleshooting, and post-migration validation",
		  "Worked directly with employees to schedule upgrades, resolve issues, and ensure a smooth transition",
		],
		skills: [
		  "Windows OS",
		  "ManageEngine Endpoint Central",
		  "Hardware & Software Troubleshooting",
		  "Help Desk Support",
		],
	  };
	  
	const umnTA = {
		color: "white",
		image: cse,
		title: "Teaching Assistant: Computational Linear Algebra",
		orgName: "University of Minnesota – College of Science & Engineering",
		date: "January 2025 – May 2025",
		location: "Minneapolis, MN",
		headliner: "Teaching Assistant supporting computational linear algebra through grading and office hours",
		bullets: [
			"Held weekly office hours to support students with computational linear algebra concepts and assignments",
			"Assisted graduate TAs with grading and feedback, ensuring consistency and clarity across coursework",
			"Reinforced concepts such as matrix operations, vector spaces, and numerical computation through hands-on problem solving",
		],
		skills: ["Linear Algebra", "Office Hours", "Grading"],
	};
	  
	const collaborationAI = {
		color: "white",
		image: collab,
		title: "AI Agent Developer",
		orgName: "Collaboration.ai",
		date: "November 2024 – December 2024",
		location: "Minneapolis, MN",
		headliner: "Developed an AI agent that analyzes Instagram engagement and quantifies DE&I metrics using Relevance AI and multi-LLM workflows",
		bullets: [
			"Built and deployed an AI-powered DE&I assessment agent to analyze Instagram engagement data",
			"Designed a custom quantitative scoring framework to measure diversity, reach, and community interaction",
			"Created a multi-LLM agent workflow using Relevance AI to automate data analysis and reporting",
			"Prompt-engineered and tuned LLM behaviors to generate consistent, actionable insights for community managers",
			"Integrated the agent into a master system used to evaluate and compare organizational social engagement",
		],
		skills: ["Relevance AI", "LLM Prompt Engineering", "Multi-Agent Workflows"],
	};
	  
	const codeTheGap = {
		color: "white",
		image: ctg,
		title: "Python Volunteer Instructor",
		orgName: "Code the Gap - University of Minnesota Twin Cities",
		date: "January 2024 – May 2024",
		location: "Minneapolis, MN",
		headliner: "Instructor teaching Python and computational thinking to K–7 students through hands-on coding",
		bullets: [
			"Taught Python fundamentals through interactive, project-based lessons",
			"Introduced loops, variables, conditionals, and problem-solving to young learners",
			"Adapted lessons to different learning levels and backgrounds",
		],
		skills: ["Python", "Teaching", "Mentorship"],
	};
	  
	const recWell = {
		color: "white",
		image: rec,
		title: "Building Manager",
		orgName: "Recreation and Wellness Center - University of Minnesota Twin Cities",
		date: "November 2022 – Present",
		location: "Minneapolis, MN",
		headliner: "Shift lead overseeing large-scale facility operations, staff coordination, and on-site emergency response",
		bullets: [
			"Supervised daily facility operations and coordinated multiple concurrent event setups",
			"Acted as shift lead, directing staff and ensuring smooth guest and athlete experiences",
			"Responded to on-site incidents and emergencies, making fast, safety-critical decisions",
		],
		skills: ["Leadership", "Operations", "Incident Response", "Event Setups"],
	};

	const xpList = [
		education,
		fed,
		localArenaTix,
		stearnsBank,
		umnTA,
		collaborationAI,
		codeTheGap,
		recWell,
	];

	return (
		<div className="relative w-full p-3">
			{xpList.map((xp) => (
				<ExperienceCard key={`${xp.orgName}-${xp.title}`}
					color={xp.color}
					image={xp.image}
					title={xp.title}
					orgName={xp.orgName}
					date={xp.date}
					location={xp.location}
					headliner={xp.headliner}
					bullets={xp.bullets}
					skills={xp.skills}
				/>
			))}
		</div>
	)
}
