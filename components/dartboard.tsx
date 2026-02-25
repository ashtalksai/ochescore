"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Dartboard segments in clockwise order starting from top (20)
const DARTBOARD_NUMBERS = [
  20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5,
];

type ScoreType = "single" | "double" | "triple" | "bull" | "outer-bull" | "miss";

interface DartScore {
  number: number;
  type: ScoreType;
  value: number;
}

interface DartboardProps {
  onScore: (score: DartScore) => void;
  disabled?: boolean;
}

export function Dartboard({ onScore, disabled = false }: DartboardProps) {
  const [animatingSegment, setAnimatingSegment] = useState<string | null>(null);
  const [flyingScore, setFlyingScore] = useState<{ x: number; y: number; value: number } | null>(null);

  const handleSegmentClick = (number: number, type: ScoreType, event: React.MouseEvent) => {
    if (disabled) return;

    let value = 0;
    if (type === "single") value = number;
    else if (type === "double") value = number * 2;
    else if (type === "triple") value = number * 3;
    else if (type === "bull") value = 50;
    else if (type === "outer-bull") value = 25;

    const segmentId = `${number}-${type}`;
    setAnimatingSegment(segmentId);

    // Get click position for flying score animation
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setFlyingScore({ x, y, value });

    // Haptic feedback on mobile
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(50);
    }

    setTimeout(() => {
      setAnimatingSegment(null);
      setFlyingScore(null);
    }, 400);

    onScore({ number, type, value });
  };

  const handleMiss = () => {
    if (disabled) return;
    onScore({ number: 0, type: "miss", value: 0 });
  };

  // Generate dartboard segments
  const segments = DARTBOARD_NUMBERS.map((number, index) => {
    const angle = (index * 18) - 81; // 18 degrees per segment, offset to start at top
    const nextAngle = angle + 18;

    // Colors alternate between black/white for singles, red/green for doubles/triples
    const isRed = [1, 4, 6, 10, 13, 15, 17, 19].includes(number);
    const singleColor = isRed ? "#DC2626" : index % 2 === 0 ? "#000" : "#F5F5F5";
    const doubleColor = isRed ? "#DC2626" : "#10B981";
    const tripleColor = doubleColor;

    // SVG path coordinates for each ring
    const outerRadius = 180;
    const doubleOuterRadius = 170;
    const doubleInnerRadius = 155;
    const tripleOuterRadius = 110;
    const tripleInnerRadius = 95;
    const innerRadius = 35;

    const toRadians = (deg: number) => (deg * Math.PI) / 180;
    const getPoint = (radius: number, angleDeg: number) => ({
      x: 200 + radius * Math.cos(toRadians(angleDeg)),
      y: 200 + radius * Math.sin(toRadians(angleDeg)),
    });

    const createPath = (outerR: number, innerR: number) => {
      const p1 = getPoint(innerR, angle);
      const p2 = getPoint(outerR, angle);
      const p3 = getPoint(outerR, nextAngle);
      const p4 = getPoint(innerR, nextAngle);

      return `M ${p1.x},${p1.y} L ${p2.x},${p2.y} A ${outerR},${outerR} 0 0,1 ${p3.x},${p3.y} L ${p4.x},${p4.y} A ${innerR},${innerR} 0 0,0 ${p1.x},${p1.y}`;
    };

    const doubleId = `${number}-double`;
    const tripleId = `${number}-triple`;
    const singleOuterId = `${number}-single-outer`;
    const singleInnerId = `${number}-single-inner`;

    return (
      <g key={number}>
        {/* Double ring */}
        <path
          d={createPath(doubleOuterRadius, doubleInnerRadius)}
          fill={doubleColor}
          stroke="#333"
          strokeWidth="0.5"
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === doubleId ? "drop-shadow(0 0 8px rgba(124, 58, 237, 0.8))" : undefined,
            transform: animatingSegment === doubleId ? "scale(1.05)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(number, "double", e)}
        />

        {/* Single outer ring */}
        <path
          d={createPath(doubleInnerRadius, tripleOuterRadius)}
          fill={singleColor}
          stroke="#333"
          strokeWidth="0.5"
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === singleOuterId ? "drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))" : undefined,
            transform: animatingSegment === singleOuterId ? "scale(1.05)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(number, "single", e)}
        />

        {/* Triple ring */}
        <path
          d={createPath(tripleOuterRadius, tripleInnerRadius)}
          fill={tripleColor}
          stroke="#333"
          strokeWidth="0.5"
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === tripleId ? "drop-shadow(0 0 8px rgba(124, 58, 237, 0.8))" : undefined,
            transform: animatingSegment === tripleId ? "scale(1.05)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(number, "triple", e)}
        />

        {/* Single inner ring */}
        <path
          d={createPath(tripleInnerRadius, innerRadius)}
          fill={singleColor}
          stroke="#333"
          strokeWidth="0.5"
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === singleInnerId ? "drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))" : undefined,
            transform: animatingSegment === singleInnerId ? "scale(1.05)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(number, "single", e)}
        />

        {/* Number label */}
        <text
          x={getPoint(190, angle + 9).x}
          y={getPoint(190, angle + 9).y}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-sm font-bold fill-white pointer-events-none"
          style={{ userSelect: "none" }}
        >
          {number}
        </text>
      </g>
    );
  });

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg
        viewBox="0 0 400 400"
        className={`w-full h-full ${disabled ? "opacity-50" : ""}`}
        onClick={(e) => {
          // Miss if clicking outside the dartboard
          const svg = e.currentTarget;
          const rect = svg.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 400;
          const y = ((e.clientY - rect.top) / rect.height) * 400;
          const distance = Math.sqrt(Math.pow(x - 200, 2) + Math.pow(y - 200, 2));
          
          if (distance > 180) {
            handleMiss();
          }
        }}
      >
        {/* Outer border */}
        <circle cx="200" cy="200" r="185" fill="#1A1A1A" stroke="#333" strokeWidth="2" />

        {/* Segments */}
        {segments}

        {/* Outer bull (25) */}
        <circle
          cx="200"
          cy="200"
          r="35"
          fill="#F97316"
          stroke="#333"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === "outer-bull" ? "drop-shadow(0 0 8px rgba(249, 115, 22, 1))" : undefined,
            transform: animatingSegment === "outer-bull" ? "scale(1.1)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(0, "outer-bull", e)}
        />

        {/* Bullseye (50) */}
        <circle
          cx="200"
          cy="200"
          r="15"
          fill="#7C3AED"
          stroke="#333"
          strokeWidth="1"
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === "bull" ? "drop-shadow(0 0 12px rgba(124, 58, 237, 1))" : undefined,
            transform: animatingSegment === "bull" ? "scale(1.2)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(0, "bull", e)}
        />
      </svg>

      {/* Flying score animation */}
      {flyingScore && (
        <motion.div
          initial={{ opacity: 1, x: flyingScore.x, y: flyingScore.y, scale: 1 }}
          animate={{ opacity: 0, y: flyingScore.y - 80, scale: 1.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute pointer-events-none text-3xl font-mono font-bold"
          style={{
            color: flyingScore.value >= 50 ? "#7C3AED" : flyingScore.value >= 40 ? "#F97316" : "#10B981",
            textShadow: "0 0 10px rgba(124, 58, 237, 0.8)",
          }}
        >
          +{flyingScore.value}
        </motion.div>
      )}
    </div>
  );
}
