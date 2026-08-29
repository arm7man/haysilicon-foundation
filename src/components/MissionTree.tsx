import type { CSSProperties } from "react";

function dashStyle(length: number, delay = 0): CSSProperties {
  return {
    ["--dash-length" as string]: length,
    animationDelay: `${delay}s`,
  } as CSSProperties;
}

interface Branch {
  d: string;
  cx: string;
  cy: string;
  keyTimes: string;
  dur: string;
  delay: number;
  leaf: [number, number];
}

const BRANCHES: Branch[] = [
  {
    d: "M70 396 V280 L28 210 L28 152",
    cx: "70;70;28;28",
    cy: "396;280;210;152",
    keyTimes: "0;0.4;0.7;1",
    dur: "5.4s",
    delay: 0,
    leaf: [28, 152],
  },
  {
    d: "M70 396 V280 L112 220 L112 162",
    cx: "70;70;112;112",
    cy: "396;280;220;162",
    keyTimes: "0;0.4;0.7;1",
    dur: "6.1s",
    delay: 1,
    leaf: [112, 162],
  },
  {
    d: "M70 396 V280 V160 V116",
    cx: "70;70;70",
    cy: "396;280;116",
    keyTimes: "0;0.35;1",
    dur: "5s",
    delay: 1.9,
    leaf: [70, 116],
  },
];

function modulePins(x: number, y: number, w: number, h: number, perSide = 1) {
  const items = [];
  const stub = 5;
  const thick = 2.6;
  for (let i = 0; i < perSide; i++) {
    const t = (i + 1) / (perSide + 1);
    const lx = x + t * w;
    const ly = y + t * h;
    items.push(<rect key={`t${i}-${x}-${y}`} x={lx - thick / 2} y={y - stub} width={thick} height={stub} fill="var(--navy)" />);
    items.push(<rect key={`l${i}-${x}-${y}`} x={x - stub} y={ly - thick / 2} width={stub} height={thick} fill="var(--navy)" />);
    items.push(<rect key={`r${i}-${x}-${y}`} x={x + w} y={ly - thick / 2} width={stub} height={thick} fill="var(--navy)" />);
  }
  return items;
}

function LeafModule({ x, y }: { x: number; y: number }) {
  const w = 22;
  const h = 14;
  const rectX = x - w / 2;
  const rectY = y - h;
  return (
    <g>
      {modulePins(rectX, rectY, w, h, 1)}
      <rect x={rectX} y={rectY} width={w} height={h} rx="2.5" fill="var(--paper-card)" stroke="var(--navy)" strokeWidth="1.5" />
      <circle cx={rectX + 4} cy={rectY + 4} r="1.6" fill="var(--ember)" />
    </g>
  );
}

export default function MissionTree({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="var(--navy)" strokeWidth="1.4" strokeOpacity="0.4" strokeLinejoin="round">
        {BRANCHES.map((b, i) => (
          <path key={i} className="circuit-line" style={dashStyle(420 + i * 60, b.delay * 0.25)} d={b.d} />
        ))}
      </g>

      {/* growth pulses rising from the base module to each leaf module */}
      {BRANCHES.map((b, i) => (
        <circle key={`pulse-${i}`} r="3.6" fill="var(--ember)">
          <animate attributeName="cx" values={b.cx} keyTimes={b.keyTimes} dur={b.dur} begin={`${b.delay}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={b.cy} keyTimes={b.keyTimes} dur={b.dur} begin={`${b.delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.85;1" dur={b.dur} begin={`${b.delay}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* leaf modules (IP blocks) */}
      {BRANCHES.map((b, i) => (
        <LeafModule key={`leaf-${i}`} x={b.leaf[0]} y={b.leaf[1]} />
      ))}

      {/* foundation base module */}
      {modulePins(52, 396, 36, 28, 1)}
      <rect x="52" y="396" width="36" height="28" rx="4" fill="var(--paper-card)" stroke="var(--ember)" strokeWidth="2" />
      <circle cx="61" cy="406" r="2.2" fill="var(--ember)" />
    </svg>
  );
}
