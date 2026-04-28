import { useState } from "react";

const CheckItem = ({ title, desc }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className="checklist-item">
            <div className={`check-icon ${checked ? "checked" : ""}`} onClick={() => setChecked(!checked)}>
                {checked && "✓"}
            </div>
            <div className="check-content">
                <h4 style={{ textDecoration: checked ? "line-through" : "none", opacity: checked ? 0.4 : 1 }}>{title}</h4>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default CheckItem;
