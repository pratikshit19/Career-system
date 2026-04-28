import CheckItem from "./CheckItem";

export default function MonthlyPhases() {
    const phases = [
        {
            num: "01", title: "Foundation Month", sub: "Month 1–2 · Complete cohort core + first projects",
            items: [
                { title: "Complete Cohort Weeks 1–12", desc: "JS fundamentals, Node, Express, React basics. Code every single module." },
                { title: "Build Project 1 — Todo/Auth App", desc: "Full stack. Login, JWT auth, database. Deployed on Vercel + Railway." },
                { title: "Start DSA — Easy problems only", desc: "20–25 easy problems across arrays, strings, hashmaps. Consistency over quantity." },
                { title: "GitHub: 50+ commits", desc: "Green squares matter to recruiters. Build in public from day 1." },
                { title: "Create LinkedIn developer profile", desc: "Update headline, add skills, post 4 times about what you're learning." },
            ]
        },
        {
            num: "02", title: "Depth Month", sub: "Month 3–4 · Go deeper, build harder projects",
            items: [
                { title: "Complete Cohort Weeks 13–20", desc: "Databases, auth flows, APIs, real-time features, deployment pipelines." },
                { title: "Build Project 2 — Real-world clone", desc: "Twitter/Notion/Slack lite clone. Something impressive. Full stack, deployed." },
                { title: "DSA: Move to Medium problems", desc: "30–35 problems. Focus on sliding window, two pointers, recursion basics." },
                { title: "System Design basics", desc: "Read: Grokking System Design (free resources). Understand scalability concepts." },
                { title: "Start cold applying to jobs", desc: "Even if not ready. Real feedback > imaginary readiness. Aim 10 apps/week." },
            ]
        },
        {
            num: "03", title: "Portfolio Month", sub: "Month 5–6 · Build what companies want to see",
            items: [
                { title: "Complete Cohort — final modules", desc: "Docker basics, CI/CD, testing, TypeScript. These differentiate junior candidates." },
                { title: "Build Project 3 — Your signature project", desc: "Something you're genuinely proud of. Solves a real problem. Polished UI, good README." },
                { title: "DSA: 75 problems total milestone", desc: "Neetcode 75 list is ideal. Cover all patterns at least once." },
                { title: "Resume overhaul", desc: "Projects front and center. Quantify impact. ATS-friendly format. Get it reviewed." },
                { title: "Apply aggressively — 20 apps/week", desc: "Startups, mid-size companies, product companies. Avoid service/outsourcing initially." },
            ]
        },
        {
            num: "04", title: "Interview Month", sub: "Month 7–8 · Convert applications to offers",
            items: [
                { title: "Mock interviews — 2x per week", desc: "Pramp, Interviewing.io, or friends. Real pressure = real prep." },
                { title: "DSA: 100 problems total", desc: "Revisit weak areas. Time yourself. Aim to solve easy in under 15 mins." },
                { title: "Behavioural prep", desc: "STAR method. Prepare 10 stories: challenges faced, things built, team situations." },
                { title: "Salary negotiation prep", desc: "Know market rates. Never accept first offer. Target 10–14LPA for first role." },
                { title: "Convert 1 offer", desc: "Land your first tech job. This is the only metric that matters this month." },
            ]
        },
    ];
    return (
        <div>
            <div className="section-title">Monthly Phase Roadmap</div>
            <div className="section-sub">8 months · 4 phases · 1 mission: land first tech role</div>
            {phases.map((phase, i) => (
                <div key={i} className="month-phase">
                    <div className="phase-header">
                        <div className="phase-num">{phase.num}</div>
                        <div className="phase-info">
                            <h3>{phase.title}</h3>
                            <p>{phase.sub}</p>
                        </div>
                    </div>
                    <div className="card">
                        {phase.items.map((item, j) => (
                            <CheckItem key={j} title={item.title} desc={item.desc} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
