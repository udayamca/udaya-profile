import React from "react";

type ToggleProps = {
  enabled: boolean;
  onToggle: (value: boolean) => void;
};

const Toggle: React.FC<ToggleProps> = ({ enabled, onToggle }) => {
  return (
    <div>
      <button
        onClick={() => onToggle(!enabled)}
        aria-label={enabled ? "dark" : "light"}
        className="text-sm cursor-pointer"
        style={{
          padding: "2px 8px",
          background: enabled
            ? "oklch(62.3% 0.214 259.815)"
            : "oklch(27.9% 0.041 260.031)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          minWidth: "40px",
        }}
      >
        {enabled ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Toggle;
