import CheckItem from "./CheckItem";

export default function MonthlyChecks() {
    const checks = [
        {
            category: "Technical Progress",
            items: [
                { title: "DSA problems solved this month", desc: "Target: 20+ problems. Track on Leetcode profile. Screenshot and save." },
                { title: "Cohort modules completed", desc: "Target: Stay on schedule. If behind by >2 weeks, skip weekday GF time temporarily." },
                { title: "Projects built and deployed", desc: "At least 1 new project or significant feature added per month. Must be live." },
                { title: "GitHub commits this month", desc: "Target: 40+ green squares. Consistency signal to recruiters." },
            ]
        },
        {
            category: "Visibility & Job Search",
            items: [
                { title: "LinkedIn posts published", desc: "Target: 4 posts per month minimum. Document your journey. Recruiters watch this." },
                { title: "Job applications sent", desc: "Month 1-4: 0. Month 5-6: 40+/month. Month 7-8: 80+/month. Track in a sheet." },
                { title: "Referrals or connections made", desc: "DM 2 developers per week on LinkedIn. Genuine, not spammy." },
                { title: "Resume updated", desc: "Update resume with new projects and skills every single month." },
            ]
        },
        {
            category: "Lifestyle & Discipline",
            items: [
                { title: "Gym sessions this month", desc: "Target: 12+ sessions (3/week). Below 8 = lifestyle is slipping, reassess." },
                { title: "Average sleep — 7hrs minimum?", desc: "If you're consistently under 6.5hrs, your retention and energy are tanking." },
                { title: "Late night studying incidents", desc: "Target: 0. If this happened more than 3x, your evening schedule needs fixing." },
                { title: "Reels/shorts screen time average", desc: "Check your phone's screen time. If it's above 1hr/day, you have a leak." },
            ]
        },
        {
            category: "Monthly Honest Audit",
            items: [
                { title: "Did I meet last month's targets?", desc: "Yes/No. If No — identify the 1 root cause, not 5 excuses." },
                { title: "What's my biggest bottleneck right now?", desc: "Time? Concept gaps? Motivation? Identify it. Then solve it directly." },
                { title: "Am I ahead or behind the 8-month plan?", desc: "Adjust next month's targets accordingly. Don't pretend — be honest." },
                { title: "What would the 40LPA version of me do differently?", desc: "Spend 10 mins writing this down. Read it before every week starts." },
            ]
        },
    ];
    return (
        <div>
            <div className="section-title">Monthly Review Checklist</div>
            <div className="section-sub">Do this every last Sunday of the month — no skipping</div>
            <div className="warning-box">
                <p><strong>Rule:</strong> You cannot improve what you don't measure. This review is not optional — it's the difference between drifting and executing.</p>
            </div>
            {checks.map((section, i) => (
                <div key={i} style={{ marginBottom: 32 }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "2px", color: "#e8e0d0", marginBottom: 16 }}>{section.category}</div>
                    <div className="card">
                        {section.items.map((item, j) => (
                            <CheckItem key={j} title={item.title} desc={item.desc} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
