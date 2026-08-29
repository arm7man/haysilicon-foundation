interface Spoke {
  d: string;
  cx: string;
  cy: string;
  dur: string;
  delay: number;
  color: "ember" | "navy";
}

const SPOKES: Spoke[] = [
  { d: "M70 210 V85", cx: "70;70", cy: "210;85", dur: "3.4s", delay: 0, color: "ember" },
  { d: "M56 250 L28 347", cx: "56;28", cy: "250;347", dur: "3.9s", delay: 0.7, color: "navy" },
  { d: "M84 250 L112 347", cx: "84;112", cy: "250;347", dur: "4.2s", delay: 1.3, color: "ember" },
];

function modulePins(x: number, y: number, w: number, h: number, perSide = 2) {
  const items = [];
  const stub = 5;
  const thick = 2.6;
  for (let i = 0; i < perSide; i++) {
    const t = (i + 1) / (perSide + 1);
    const tx = x + t * w;
    const ly = y + t * h;
    items.push(<rect key={`t${i}-${x}-${y}`} x={tx - thick / 2} y={y - stub} width={thick} height={stub} fill="var(--navy)" />);
    items.push(<rect key={`b${i}-${x}-${y}`} x={tx - thick / 2} y={y + h} width={thick} height={stub} fill="var(--navy)" />);
    items.push(<rect key={`l${i}-${x}-${y}`} x={x - stub} y={ly - thick / 2} width={stub} height={thick} fill="var(--navy)" />);
    items.push(<rect key={`r${i}-${x}-${y}`} x={x + w} y={ly - thick / 2} width={stub} height={thick} fill="var(--navy)" />);
  }
  return items;
}

export default function BridgeConnector({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* strong connections radiating from the foundation module */}
      <g stroke="var(--navy)" strokeWidth="1.8" strokeOpacity="0.55">
        {SPOKES.map((s) => (
          <path key={s.d} d={s.d} />
        ))}
      </g>

      {SPOKES.map((s, i) => (
        <circle key={`pulse-${i}`} r="3.8" fill={`var(--${s.color})`}>
          <animate attributeName="cx" values={s.cx} dur={s.dur} begin={`${s.delay}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={s.cy} dur={s.dur} begin={`${s.delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={s.dur} begin={`${s.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* university module */}
      {modulePins(49, 55, 42, 30, 2)}
      <rect x="49" y="55" width="42" height="30" rx="4" fill="var(--paper-card)" stroke="var(--navy)" strokeWidth="1.6" />
      <circle className="pulse-node" cx="58" cy="64" r="2.4" fill="var(--navy)" />

      {/* students module */}
      {modulePins(10, 347, 36, 26, 1)}
      <rect x="10" y="347" width="36" height="26" rx="4" fill="var(--paper-card)" stroke="var(--navy)" strokeWidth="1.6" />
      <circle className="pulse-node" cx="19" cy="356" r="2.4" fill="var(--navy)" style={{ animationDelay: "0.4s" }} />

      {/* industry module */}
      {modulePins(94, 347, 36, 26, 1)}
      <rect x="94" y="347" width="36" height="26" rx="4" fill="var(--paper-card)" stroke="var(--navy)" strokeWidth="1.6" />
      <circle className="pulse-node" cx="103" cy="356" r="2.4" fill="var(--navy)" style={{ animationDelay: "0.9s" }} />

      {/* foundation module, at the center of it all */}
      {modulePins(50, 210, 40, 40, 3)}
      <rect x="50" y="210" width="40" height="40" rx="6" fill="var(--paper-card)" stroke="var(--ember)" strokeWidth="2.2" />
      <circle className="pulse-node" cx="70" cy="230" r="4" fill="var(--ember)" />
    </svg>
  );
}
