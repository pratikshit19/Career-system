export default function WeeklyPlan() {
    const days = [
        {
            name: "Monday", type: "FOCUS", typeClass: "day-focus",
            tasks: [
                { dot: "dot-orange", text: <><strong>Morning (5:55am):</strong> Resume Cohort — new concept or continue where left off</> },
                { dot: "dot-red", text: <><strong>Evening study:</strong> Watch + code along. Build the project for that week's module</> },
                { dot: "dot-blue", text: <><strong>DSA:</strong> 1 Easy Leetcode — Arrays or Strings</> },
                { dot: "dot-green", text: <><strong>Gym</strong></> },
            ]
        },
        {
            name: "Tuesday", type: "BUILD", typeClass: "day-focus",
            tasks: [
                { dot: "dot-orange", text: <><strong>Morning:</strong> Revise Monday's concept — rewrite key code from memory</> },
                { dot: "dot-red", text: <><strong>Evening:</strong> Extend the project. Add a feature. Don't copy — think and build</> },
                { dot: "dot-blue", text: <><strong>DSA:</strong> 1 Easy Leetcode</> },
                { dot: "dot-green", text: <><strong>Gym</strong></> },
            ]
        },
        {
            name: "Wednesday", type: "GF DAY", typeClass: "day-light",
            tasks: [
                { dot: "dot-orange", text: <><strong>Morning:</strong> DSA only — 1 problem before leaving</> },
                { dot: "dot-blue", text: <><strong>Evening:</strong> GF time — fully present, no guilt. Recharge.</> },
                { dot: "dot-red", text: <><strong>Before sleeping:</strong> 20 min — read 1 tech article or docs</> },
            ]
        },
        {
            name: "Thursday", type: "FOCUS", typeClass: "day-focus",
            tasks: [
                { dot: "dot-orange", text: <><strong>Morning:</strong> Next Cohort module or concept</> },
                { dot: "dot-red", text: <><strong>Evening:</strong> Deep build session — connect concepts, integrate APIs</> },
                { dot: "dot-blue", text: <><strong>DSA:</strong> 1 Medium Leetcode attempt (even partial progress = win)</> },
                { dot: "dot-green", text: <><strong>Gym</strong></> },
            ]
        },
        {
            name: "Friday", type: "CONSOLIDATE", typeClass: "day-light",
            tasks: [
                { dot: "dot-orange", text: <><strong>Morning:</strong> Review the week's code. Understand what you built</> },
                { dot: "dot-red", text: <><strong>Evening:</strong> Polish and deploy this week's project to GitHub + live URL</> },
                { dot: "dot-blue", text: <><strong>Write:</strong> 1 LinkedIn post about what you learned this week (this builds your profile)</> },
            ]
        },
        {
            name: "Saturday", type: "SPRINT", typeClass: "day-focus",
            tasks: [
                { dot: "dot-orange", text: <><strong>Morning (3–4 hrs):</strong> Biggest study block of the week — tackle hardest concept</> },
                { dot: "dot-blue", text: <><strong>Afternoon:</strong> GF / personal time — fully off</> },
                { dot: "dot-red", text: <><strong>Evening optional:</strong> 1 hr light reading — system design, tech blogs</> },
            ]
        },
        {
            name: "Sunday", type: "RESET", typeClass: "day-rest-day",
            tasks: [
                { dot: "dot-green", text: <><strong>Morning:</strong> Plan the coming week — what modules? What to build?</> },
                { dot: "dot-blue", text: <><strong>Rest genuinely</strong> — walk, eat well, sleep early</> },
                { dot: "dot-orange", text: <><strong>30 min only:</strong> Review monthly progress. Adjust if needed</> },
                { dot: "dot-red", text: <><strong>Prep:</strong> Set up laptop, resources, tabs for Monday morning</> },
            ]
        },
    ];
return (
    <div>
        <div className="section-title">Weekly Execution Plan</div>
        <div className="section-sub">Structure every day — no room for "I'll figure it out later"</div>
        <div className="success-box">
            <p><strong>Weekly non-negotiables:</strong> 3x Gym · 5x DSA problems · 1 deployed project update</p>
        </div>
        <div className="card">
            {days.map((day, i) => (
                <div key={i} className="week-day">
                    <div className="day-header">
                        {day.name}
                        <span className={`day-tag ${day.typeClass}`}>{day.type}</span>
                    </div>
                    {day.tasks.map((t, j) => (
                        <div key={j} className="task-row">
                            <div className={`task-dot ${t.dot}`}></div>
                            <div className="task-text">{t.text}</div>
                        </div>
                    ))}
                    {i < days.length - 1 && <div className="divider" style={{ marginTop: 16 }}></div>}
                </div>
            ))}
        </div>
    </div>
);
}
