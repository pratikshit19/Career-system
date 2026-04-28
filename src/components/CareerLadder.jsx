export default function CareerLadder() {
    const steps = [
        {
            label: "NOW", active: true,
            title: "Non-Tech Role → Career Switcher",
            lpa: "4.5 LPA",
            desc: "IT degree, 0 tech exp, 6 weeks into cohort. Foundation phase. Every day counts."
        },
        {
            label: "8M",
            title: "First Tech Job · Junior Developer / SDE-1",
            lpa: "8–14 LPA",
            desc: "Target: Month 7–9. Product startups or mid-size companies. Your projects and cohort completion get you here."
        },
        {
            label: "2Y",
            title: "SDE-1 → SDE-2 · Job Switch",
            lpa: "18–28 LPA",
            desc: "After 18-24 months of real work experience. Switch companies — that's where the jump happens. Internal promotions are slow."
        },
        {
            label: "4Y",
            title: "Senior Dev / Specialist",
            lpa: "30–40+ LPA",
            desc: "Deep expertise in 1-2 areas. System design fluency. Strong communication. This is achievable in 4-5 years with focused execution."
        },
    ];
    return (
        <div>
            <div className="section-title">Career Ladder</div>
            <div className="section-sub">The honest roadmap — no shortcuts, no illusions</div>
            <div className="warning-box">
                <p><strong>Reality check:</strong> Most people take 8–10 years to reach 40LPA. With this system, you're targeting <strong>4–5 years</strong>. That's the edge discipline buys you.</p>
            </div>
            <div className="card" style={{ marginBottom: 32 }}>
                {steps.map((step, i) => (
                    <div key={i} className="ladder-step">
                        <div className="ladder-left">
                            <div className={`ladder-circle ${step.active ? "active" : ""}`}>{step.label}</div>
                            {i < steps.length - 1 && <div className="ladder-line"></div>}
                        </div>
                        <div className="ladder-content">
                            <div className="lpa">{step.lpa}</div>
                            <h4>{step.title}</h4>
                            <p>{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="section-title" style={{ fontSize: "1.2rem", marginTop: 32, marginBottom: 8 }}>Key Accelerators</div>
            <div className="section-sub" style={{ marginBottom: 20 }}>Things that will move you faster than anything else</div>
            <div className="grid-3">
                {[
                    { num: "01", title: "Build in public", desc: "LinkedIn posts, GitHub activity, deployed projects. Visibility = opportunities finding you." },
                    { num: "02", title: "Switch companies to grow", desc: "Your biggest salary jumps will ALWAYS come from switching, not internal hikes. Plan for it." },
                    { num: "03", title: "Product > Service", desc: "Target product companies from the start. The learning curve is steeper but the ceiling is much higher." },
                    { num: "04", title: "Spec in 1 area", desc: "After first job — go deep in one stack. Backend Node, or frontend React+TS, or DevOps/Cloud. Generalists get paid less." },
                    { num: "05", title: "Network early", desc: "DM developers genuinely. Referrals bypass the resume filter. 1 referral > 50 cold applications." },
                    { num: "06", title: "Body = Engine", desc: "Gym, sleep, nutrition. Your competition is grinding too. Physical health is your unfair advantage." },
                ].map((item, i) => (
                    <div key={i} className="metric-card" style={{ textAlign: "left" }}>
                        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "#1e1e1e", marginBottom: 8 }}>{item.num}</div>
                        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "0.95rem", letterSpacing: "1.5px", color: "#ff8c00", marginBottom: 8 }}>{item.title}</div>
                        <div style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
