import { useState } from "react";
import DailySystem from "./components/DailySystem";
import WeeklyPlan from "./components/WeeklyPlan";
import MonthlyPhases from "./components/MonthlyPhases";
import MonthlyChecks from "./components/MonthlyChecks";
import CareerLadder from "./components/CareerLadder";
import "./styles/main.css";

const TABS = ["Daily System", "Weekly Plan", "Monthly Phases", "Monthly Checks", "Career Ladder"];

export default function App() {
    const [tab, setTab] = useState(0);
    return (
        <div className="app">
            <div className="header">
                <div className="header-left">
                    <h1>THE SYSTEM</h1>
                    <p>4.5LPA → 40LPA · Career Execution Framework</p>
                </div>
                <div className="header-badge">TARGET: 40LPA</div>
            </div>
            <div className="tabs">
                {TABS.map((t, i) => (
                    <button key={i} className={`tab ${tab === i ? "active" : ""}`} onClick={() => setTab(i)}>{t}</button>
                ))}
            </div>
            <div className="content">
                {tab === 0 && <DailySystem />}
                {tab === 1 && <WeeklyPlan />}
                {tab === 2 && <MonthlyPhases />}
                {tab === 3 && <MonthlyChecks />}
                {tab === 4 && <CareerLadder />}
            </div>
        </div>
    );
}
