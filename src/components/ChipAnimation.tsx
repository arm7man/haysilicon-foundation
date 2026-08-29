import type { CSSProperties } from "react";

function dashStyle(length: number, delay = 0): CSSProperties {
  return {
    ["--dash-length" as string]: length,
    animationDelay: `${delay}s`,
  } as CSSProperties;
}

interface Trace {
  id: string;
  d: string;
  cx: string;
  cy: string;
  keyTimes: string;
  dur: string;
  delay: number;
}

const TRACES: Trace[] = [
  {
    id: "t1",
    d: "M980 330 V210 H760 V70",
    cx: "980;980;760;760",
    cy: "330;210;210;70",
    keyTimes: "0;0.3;0.7;1",
    dur: "4.5s",
    delay: 0,
  },
  {
    id: "t2",
    d: "M980 330 V210 H1150 V60",
    cx: "980;980;1150;1150",
    cy: "330;210;210;60",
    keyTimes: "0;0.3;0.7;1",
    dur: "5.2s",
    delay: 0.8,
  },
  {
    id: "t3",
    d: "M900 385 H740 V180",
    cx: "900;740;740",
    cy: "385;385;180",
    keyTimes: "0;0.55;1",
    dur: "3.8s",
    delay: 1.4,
  },
  {
    id: "t4",
    d: "M1060 385 H1170 V600",
    cx: "1060;1170;1170",
    cy: "385;385;600",
    keyTimes: "0;0.55;1",
    dur: "4.1s",
    delay: 0.4,
  },
  {
    id: "t5",
    d: "M940 440 V620 H740 V730",
    cx: "940;940;740;740",
    cy: "440;620;620;730",
    keyTimes: "0;0.3;0.7;1",
    dur: "5.6s",
    delay: 2,
  },
  {
    id: "t6",
    d: "M1020 440 V610 H1150 V700",
    cx: "1020;1020;1150;1150",
    cy: "440;610;610;700",
    keyTimes: "0;0.3;0.7;1",
    dur: "4.8s",
    delay: 1.1,
  },
];

const PIN_COUNT = 6;
const CHIP = { x: 900, y: 330, w: 160, h: 110 };

function pins(side: "top" | "bottom" | "left" | "right") {
  const items = [];
  for (let i = 0; i < PIN_COUNT; i++) {
    const t = (i + 1) / (PIN_COUNT + 1);
    if (side === "top" || side === "bottom") {
      const x = CHIP.x + t * CHIP.w;
      const y = side === "top" ? CHIP.y : CHIP.y + CHIP.h;
      items.push(
        <rect
          key={`${side}-${i}`}
          x={x - 3}
          y={side === "top" ? y - 10 : y}
          width={6}
          height={10}
          fill="var(--navy)"
        />
      );
    } else {
      const y = CHIP.y + t * CHIP.h;
      const x = side === "left" ? CHIP.x : CHIP.x + CHIP.w;
      items.push(
        <rect
          key={`${side}-${i}`}
          x={side === "left" ? x - 10 : x}
          y={y - 3}
          width={10}
          height={6}
          fill="var(--navy)"
        />
      );
    }
  }
  return items;
}

export default function ChipAnimation({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="pcb-dots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill="var(--navy)" fillOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#pcb-dots)" />

      <g stroke="var(--navy)" strokeWidth="1.4" strokeOpacity="0.4">
        {TRACES.map((trace, i) => (
          <path key={trace.id} className="circuit-line" style={dashStyle(900 + i * 60, trace.delay * 0.3)} d={trace.d} />
        ))}
      </g>

      {/* traveling data pulses along each trace */}
      {TRACES.map((trace) => (
        <circle key={`pulse-${trace.id}`} r="4.5" fill="var(--ember)">
          <animate
            attributeName="cx"
            values={trace.cx}
            keyTimes={trace.keyTimes}
            dur={trace.dur}
            begin={`${trace.delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values={trace.cy}
            keyTimes={trace.keyTimes}
            dur={trace.dur}
            begin={`${trace.delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.08;0.85;1"
            dur={trace.dur}
            begin={`${trace.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* endpoint nodes */}
      <g fill="var(--navy)">
        {[
          [760, 70],
          [1150, 60],
          [740, 180],
          [1170, 600],
          [740, 730],
          [1150, 700],
        ].map(([x, y], i) => (
          <circle key={`${x}-${y}`} className="pulse-node" cx={x} cy={y} r="4" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </g>

      {/* chip package */}
      <g>
        {pins("top")}
        {pins("bottom")}
        {pins("left")}
        {pins("right")}
        <rect
          x={CHIP.x}
          y={CHIP.y}
          width={CHIP.w}
          height={CHIP.h}
          rx="6"
          fill="var(--paper-card)"
          stroke="var(--navy)"
          strokeWidth="2"
        />
        <circle cx={CHIP.x + 16} cy={CHIP.y + 16} r="3" fill="var(--ember)" />
        <text
          x={CHIP.x + CHIP.w / 2}
          y={CHIP.y + CHIP.h / 2 + 5}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="14"
          letterSpacing="2"
          fill="var(--navy)"
        >
          AS
        </text>
      </g>
    </svg>
  );
}
