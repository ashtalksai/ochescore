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
  highlightNumber?: number; // For round-the-clock mode
  highlightBull?: boolean; // For round-the-clock bullseye stage
}

export function Dartboard({ 
  onScore, 
  disabled = false, 
  highlightNumber,
  highlightBull = false 
}: DartboardProps) {
  const [animatingSegment, setAnimatingSegment] = useState<string | null>(null);
  const [flyingScore, setFlyingScore] = useState<{ x: number; y: number; value: number; isHit?: boolean } | null>(null);

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
    
    // Determine if it's a hit for round-the-clock
    const isHit = highlightNumber !== undefined 
      ? number === highlightNumber 
      : highlightBull 
        ? (type === "bull" || type === "outer-bull")
        : value > 0;
    
    setFlyingScore({ x, y, value, isHit });

    // Haptic feedback on mobile
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(isHit ? 100 : 30);
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
    const angle = (index * 18) - 99; // 18 degrees per segment, offset so 20 is centered at top (-90°)
    const nextAngle = angle + 18;

    // Check if this number should be highlighted
    const isHighlighted = highlightNumber === number;

    // Standard dartboard colors: black/cream for singles, red/green for doubles/triples
    // Red segments: 1, 4, 6, 15, 17, 19 (and their doubles/triples)
    // Green segments: 2, 3, 7, 8, 10, 11, 12, 13, 14, 16, 18, 20
    const isRedSegment = index % 2 === 0;
    
    // Singles: black and cream/tan (not white - more like a real board)
    const singleColor = index % 2 === 0 ? "#1a1a1a" : "#F5DEB3";
    // Doubles/triples: red and green
    const doubleColor = isRedSegment ? "#C41E3A" : "#228B22";
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

    // Highlight style for round-the-clock target
    const highlightFilter = isHighlighted ? "drop-shadow(0 0 12px rgba(249, 115, 22, 1))" : undefined;
    const highlightStroke = isHighlighted ? "#F97316" : "#333";
    const highlightStrokeWidth = isHighlighted ? "2" : "0.5";

    return (
      <g key={number}>
        {/* Double ring */}
        <path
          d={createPath(doubleOuterRadius, doubleInnerRadius)}
          fill={doubleColor}
          stroke={highlightStroke}
          strokeWidth={highlightStrokeWidth}
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === doubleId 
              ? "drop-shadow(0 0 8px rgba(124, 58, 237, 0.8))" 
              : highlightFilter,
            transform: animatingSegment === doubleId ? "scale(1.05)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(number, "double", e)}
        />

        {/* Single outer ring */}
        <path
          d={createPath(doubleInnerRadius, tripleOuterRadius)}
          fill={singleColor}
          stroke={highlightStroke}
          strokeWidth={highlightStrokeWidth}
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === singleOuterId 
              ? "drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))" 
              : highlightFilter,
            transform: animatingSegment === singleOuterId ? "scale(1.05)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(number, "single", e)}
        />

        {/* Triple ring */}
        <path
          d={createPath(tripleOuterRadius, tripleInnerRadius)}
          fill={tripleColor}
          stroke={highlightStroke}
          strokeWidth={highlightStrokeWidth}
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === tripleId 
              ? "drop-shadow(0 0 8px rgba(124, 58, 237, 0.8))" 
              : highlightFilter,
            transform: animatingSegment === tripleId ? "scale(1.05)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(number, "triple", e)}
        />

        {/* Single inner ring */}
        <path
          d={createPath(tripleInnerRadius, innerRadius)}
          fill={singleColor}
          stroke={highlightStroke}
          strokeWidth={highlightStrokeWidth}
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === singleInnerId 
              ? "drop-shadow(0 0 8px rgba(249, 115, 22, 0.8))" 
              : highlightFilter,
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
          className={`text-sm font-bold pointer-events-none ${isHighlighted ? 'fill-[#F97316]' : 'fill-white'}`}
          style={{ 
            userSelect: "none",
            fontWeight: isHighlighted ? 900 : 700,
          }}
        >
          {number}
        </text>
      </g>
    );
  });

  // Bull highlight styles
  const bullHighlightFilter = highlightBull ? "drop-shadow(0 0 15px rgba(124, 58, 237, 1))" : undefined;
  const outerBullHighlightFilter = highlightBull ? "drop-shadow(0 0 12px rgba(249, 115, 22, 1))" : undefined;

  const handleMissClick = (e: React.MouseEvent) => {
    if (disabled) return;
    
    // Flying miss animation
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setFlyingScore({ x, y, value: 0, isHit: false });
    
    // Haptic feedback
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(30);
    }
    
    setTimeout(() => setFlyingScore(null), 400);
    handleMiss();
  };

  return (
    <div 
      className="relative w-full aspect-square"
      onClick={handleMissClick}
    >
      <svg
        viewBox="0 0 400 400"
        className={`w-full h-full ${disabled ? "opacity-50" : ""}`}
        onClick={(e) => {
          // Check if click is inside the scoring area - if so, stop propagation
          const svg = e.currentTarget;
          const rect = svg.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 400;
          const y = ((e.clientY - rect.top) / rect.height) * 400;
          const distance = Math.sqrt(Math.pow(x - 200, 2) + Math.pow(y - 200, 2));
          
          if (distance <= 180) {
            // Inside dartboard - stop event from bubbling to miss handler
            e.stopPropagation();
          }
          // Outside clicks will bubble up to parent div's handleMissClick
        }}
      >
        {/* Miss zone - outer ring */}
        <circle 
          cx="200" 
          cy="200" 
          r="198" 
          fill="#0a0a0a" 
          stroke="#333" 
          strokeWidth="1"
          strokeDasharray="4 4"
          className="cursor-pointer"
        />
        <text
          x="200"
          y="15"
          textAnchor="middle"
          className="fill-gray-600 text-[10px] uppercase tracking-widest pointer-events-none"
        >
          miss zone
        </text>
        
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
          stroke={highlightBull ? "#F97316" : "#333"}
          strokeWidth={highlightBull ? "3" : "1"}
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === "outer-bull" 
              ? "drop-shadow(0 0 8px rgba(249, 115, 22, 1))" 
              : outerBullHighlightFilter,
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
          stroke={highlightBull ? "#7C3AED" : "#333"}
          strokeWidth={highlightBull ? "3" : "1"}
          className="cursor-pointer transition-all duration-150"
          style={{
            filter: animatingSegment === "bull" 
              ? "drop-shadow(0 0 12px rgba(124, 58, 237, 1))" 
              : bullHighlightFilter,
            transform: animatingSegment === "bull" ? "scale(1.2)" : undefined,
            transformOrigin: "center",
          }}
          onClick={(e) => handleSegmentClick(0, "bull", e)}
        />

        {/* Pulsing ring for highlighted bull */}
        {highlightBull && (
          <circle
            cx="200"
            cy="200"
            r="40"
            fill="none"
            stroke="#F97316"
            strokeWidth="2"
            className="animate-ping"
            style={{ opacity: 0.5 }}
          />
        )}
      </svg>

      {/* Flying score animation */}
      {flyingScore && (
        <motion.div
          initial={{ opacity: 1, x: flyingScore.x, y: flyingScore.y, scale: 1 }}
          animate={{ opacity: 0, y: flyingScore.y - 80, scale: 1.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute pointer-events-none text-3xl font-mono font-bold"
          style={{
            color: flyingScore.isHit === false 
              ? "#EF4444" 
              : flyingScore.value >= 50 
                ? "#7C3AED" 
                : flyingScore.value >= 40 
                  ? "#F97316" 
                  : "#10B981",
            textShadow: flyingScore.isHit === false
              ? "0 0 10px rgba(239, 68, 68, 0.8)"
              : "0 0 10px rgba(124, 58, 237, 0.8)",
          }}
        >
          {flyingScore.isHit === false ? "✗" : `+${flyingScore.value}`}
        </motion.div>
      )}

      {/* Target indicator for round-the-clock */}
      {(highlightNumber || highlightBull) && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#F97316] text-white px-4 py-2 rounded-full font-bold text-sm">
          Target: {highlightBull ? "🎯 Bullseye" : highlightNumber}
        </div>
      )}
    </div>
  );
}
