export default function DailySystem() {
    return (
    <div>
      <div className="section-title">Daily Operating System</div>
      <div className="section-sub">Your non-negotiable daily structure — Mon to Fri</div>
      <div className="warning-box">
        <p><strong>Core Principle:</strong> You don't have extra time — you have misallocated time. This system reclaims it.</p>
      </div>
      <div className="grid-2">
        <div className="card">
          <div className="card-title"><span className="icon">🌅</span> Morning Block</div>
          <div className="time-block">
            <span className="time-label">5:50 AM</span>
            <div className="time-text"><strong>Wake up</strong> — No phone for first 10 mins. Drink water immediately.</div>
          </div>
          <div className="time-block">
            <span className="time-label">5:55 AM</span>
            <div className="time-text"><strong>Morning Study</strong> <span className="tag tag-hard">HARD FOCUS</span><br/>30 mins — Cohort content or DSA. Brain is freshest NOW.</div>
          </div>
          <div className="time-block">
            <span className="time-label">6:30 AM</span>
            <div className="time-text"><strong>Leave for office</strong></div>
          </div>
          <div className="time-block">
            <span className="time-label">6:30–8:15 AM</span>
            <div className="time-text"><strong>Commute = Learning</strong> <span className="tag tag-soft">PASSIVE</span><br/>Podcasts / tech concepts / system design audio. Never reels.</div>
          </div>
        </div>
        <div className="card">
          <div className="card-title"><span className="icon">🏢</span> Office Block</div>
          <div className="time-block">
            <span className="time-label">8:15 AM</span>
            <div className="time-text"><strong>Arrive office</strong> — Stay low, do your job well. Don't burn bridges.</div>
          </div>
          <div className="time-block">
            <span className="time-label">During work</span>
            <div className="time-text"><strong>Observe everything</strong> <span className="tag tag-key">MINDSET</span><br/>How do senior people communicate? How are decisions made? Learn soft skills passively.</div>
          </div>
          <div className="time-block">
            <span className="time-label">Lunch break</span>
            <div className="time-text"><strong>15 mins reading</strong> — 1 tech article or 1 Leetcode problem attempt. Not mandatory but powerful.</div>
          </div>
          <div className="time-block">
            <span className="time-label">6:00–7:00 PM</span>
            <div className="time-text"><strong>Return commute</strong> — Same rule. Audio learning only.</div>
          </div>
        </div>
        <div className="card">
          <div className="card-title"><span className="icon">🌙</span> Evening Block</div>
          <div className="time-block">
            <span className="time-label">7:00–7:30 PM</span>
            <div className="time-text"><strong>Decompress</strong> <span className="tag tag-rest">REST</span><br/>Eat dinner. Sit quietly. Do NOT open laptop yet. Reset.</div>
          </div>
          <div className="time-block">
            <span className="time-label">7:30–8:15 PM</span>
            <div className="time-text"><strong>GYM</strong> <span className="tag tag-key">NON-NEGOTIABLE</span><br/>3x per week minimum. Resets cortisol. Sharpens evening focus.</div>
          </div>
          <div className="time-block">
            <span className="time-label">8:30–10:30 PM</span>
            <div className="time-text"><strong>Deep Study Block</strong> <span className="tag tag-hard">HARD FOCUS</span><br/>2 hours — Cohort projects, building, coding. Phone in another room.</div>
          </div>
          <div className="time-block">
            <span className="time-label">10:30–11:00 PM</span>
            <div className="time-text"><strong>Wind down + review</strong> — Note what you built today. Plan tomorrow's study topic.</div>
          </div>
          <div className="time-block">
            <span className="time-label">11:00 PM</span>
            <div className="time-text"><strong>SLEEP</strong> — Hard stop. No exceptions.</div>
          </div>
        </div>
        <div className="card">
          <div className="card-title"><span className="icon">⚠️</span> Iron Rules</div>
          <div className="rule-item">
            <div className="rule-bullet"></div>
            <div className="rule-text"><strong>GF time:</strong> 1 fixed weekday evening + full Saturday. Communicate the mission. Protect it.</div>
          </div>
          <div className="rule-item">
            <div className="rule-bullet"></div>
            <div className="rule-text"><strong>No late night studying past 11pm.</strong> Exhausted brain retention = near zero.</div>
          </div>
          <div className="rule-item">
            <div className="rule-bullet"></div>
            <div className="rule-text"><strong>Phone goes to another room</strong> during both study blocks.</div>
          </div>
          <div className="rule-item">
            <div className="rule-bullet"></div>
            <div className="rule-text"><strong>Reels/YouTube shorts = 0</strong> on weekdays. This is the single biggest time leak.</div>
          </div>
          <div className="rule-item">
            <div className="rule-bullet"></div>
            <div className="rule-text"><strong>Every project must be deployed.</strong> Not just local. Vercel, Railway, Render — live URLs only.</div>
          </div>
          <div className="rule-item">
            <div className="rule-bullet"></div>
            <div className="rule-text"><strong>Track your streak.</strong> Missing 1 day is a mistake. Missing 2 is a habit. Guard day 1.</div>
          </div>
        </div >
      </div >
    </div >
  );
}
