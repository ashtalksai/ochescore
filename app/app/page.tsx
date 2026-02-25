"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Dartboard } from "@/components/dartboard";
import Link from "next/link";
import confetti from "canvas-confetti";
import { ArrowLeft, Undo, Target, Trophy } from "lucide-react";

type GameMode = "x01" | "round-the-clock" | null;
type X01Variant = 301 | 501 | 101;
type OutType = "normal" | "double";

interface Player {
  name: string;
  score: number;
  currentTurn: number[];
  history: number[][];
}

interface DartScore {
  number: number;
  type: string;
  value: number;
}

export default function AppPage() {
  const [gameMode, setGameMode] = useState<GameMode>(null);
  const [x01Variant, setX01Variant] = useState<X01Variant>(501);
  const [outType, setOutType] = useState<OutType>("normal");
  const [players, setPlayers] = useState<Player[]>([
    { name: "Player 1", score: 501, currentTurn: [], history: [] },
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState<Player | null>(null);

  // Checkout hints for scores ≤170
  const getCheckoutHint = (remaining: number): string => {
    const checkouts: Record<number, string> = {
      170: "T20 → T20 → Bull",
      167: "T20 → T19 → Bull",
      164: "T20 → T18 → Bull",
      161: "T20 → T17 → Bull",
      160: "T20 → T20 → D20",
      158: "T20 → T20 → D19",
      157: "T20 → T19 → D20",
      156: "T20 → T20 → D18",
      155: "T20 → T19 → D19",
      154: "T20 → T18 → D20",
      153: "T20 → T19 → D18",
      152: "T20 → T20 → D16",
      151: "T20 → T17 → D20",
      150: "T20 → T18 → D18",
      // Add more checkouts as needed
      120: "T20 → 20 → D20",
      110: "T20 → T10 → D20",
      100: "T20 → D20",
      90: "T20 → D15",
      80: "T20 → D10",
      70: "T10 → D20",
      60: "20 → D20",
      50: "Bull",
      40: "D20",
      32: "D16",
    };

    return checkouts[remaining] || (remaining <= 40 && remaining % 2 === 0 ? `D${remaining / 2}` : "");
  };

  const addPlayer = () => {
    if (players.length < 4) {
      setPlayers([
        ...players,
        { name: `Player ${players.length + 1}`, score: x01Variant, currentTurn: [], history: [] },
      ]);
    }
  };

  const removePlayer = (index: number) => {
    if (players.length > 1) {
      setPlayers(players.filter((_, i) => i !== index));
    }
  };

  const updatePlayerName = (index: number, name: string) => {
    const updated = [...players];
    updated[index].name = name;
    setPlayers(updated);
  };

  const startGame = () => {
    const initializedPlayers = players.map(p => ({
      ...p,
      score: x01Variant,
      currentTurn: [],
      history: [],
    }));
    setPlayers(initializedPlayers);
    setCurrentPlayerIndex(0);
    setGameStarted(true);
    setWinner(null);
  };

  const handleScore = (dartScore: DartScore) => {
    if (winner) return;

    const currentPlayer = players[currentPlayerIndex];
    const newTurn = [...currentPlayer.currentTurn, dartScore.value];

    // Check if turn is complete (3 darts)
    if (newTurn.length === 3) {
      const turnTotal = newTurn.reduce((sum, val) => sum + val, 0);
      const newScore = currentPlayer.score - turnTotal;

      // Check for valid finish
      let isValidFinish = false;
      if (newScore === 0) {
        if (outType === "double") {
          // Must finish with a double
          isValidFinish = dartScore.type === "double" || dartScore.type === "bull";
        } else {
          isValidFinish = true;
        }
      }

      if (isValidFinish) {
        // Winner!
        const updatedPlayers = [...players];
        updatedPlayers[currentPlayerIndex] = {
          ...currentPlayer,
          score: 0,
          currentTurn: [],
          history: [...currentPlayer.history, newTurn],
        };
        setPlayers(updatedPlayers);
        setWinner(updatedPlayers[currentPlayerIndex]);
        
        // Confetti!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7C3AED', '#F97316', '#10B981'],
        });
      } else if (newScore < 0 || (outType === "double" && newScore === 0 && dartScore.type !== "double" && dartScore.type !== "bull")) {
        // Bust - reset to score at start of turn
        const updatedPlayers = [...players];
        updatedPlayers[currentPlayerIndex] = {
          ...currentPlayer,
          currentTurn: [],
          history: [...currentPlayer.history, newTurn],
        };
        setPlayers(updatedPlayers);
        
        // Move to next player
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
      } else {
        // Valid turn
        const updatedPlayers = [...players];
        updatedPlayers[currentPlayerIndex] = {
          ...currentPlayer,
          score: newScore,
          currentTurn: [],
          history: [...currentPlayer.history, newTurn],
        };
        setPlayers(updatedPlayers);
        
        // Move to next player
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
      }
    } else {
      // Add dart to current turn
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = {
        ...currentPlayer,
        currentTurn: newTurn,
      };
      setPlayers(updatedPlayers);
    }
  };

  const undoLast = () => {
    const currentPlayer = players[currentPlayerIndex];
    if (currentPlayer.currentTurn.length > 0) {
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = {
        ...currentPlayer,
        currentTurn: currentPlayer.currentTurn.slice(0, -1),
      };
      setPlayers(updatedPlayers);
    }
  };

  const recordMiss = () => {
    handleScore({ number: 0, type: "miss", value: 0 });
  };

  const resetGame = () => {
    setGameMode(null);
    setGameStarted(false);
    setWinner(null);
    setPlayers([{ name: "Player 1", score: 501, currentTurn: [], history: [] }]);
    setCurrentPlayerIndex(0);
  };

  // Mode Selection
  if (!gameMode) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <motion.h1 
            className="font-display text-64 font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Select Game Mode
          </motion.h1>
          <motion.p 
            className="text-20 text-text-secondary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Choose your game and start scoring
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card 
                className="bg-surface border-white/10 hover:border-[#7C3AED] hover:shadow-lg hover:shadow-[#7C3AED]/20 cursor-pointer transition-all h-full"
                onClick={() => setGameMode("x01")}
              >
                <CardHeader>
                  <Target className="w-16 h-16 text-[#7C3AED] mb-4" />
                  <CardTitle className="text-32 font-display">X01 Games</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-16 mb-4">
                    Classic 301, 501, or 101. Count down to zero. Normal or double-out rules.
                  </p>
                  <ul className="space-y-2 text-14 text-text-secondary">
                    <li>• Perfect for competitive play</li>
                    <li>• Checkout hints included</li>
                    <li>• 1-4 players</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card 
                className="bg-surface border-white/10 hover:border-[#F97316] hover:shadow-lg hover:shadow-[#F97316]/20 cursor-pointer transition-all h-full opacity-50"
              >
                <CardHeader>
                  <Trophy className="w-16 h-16 text-[#F97316] mb-4" />
                  <CardTitle className="text-32 font-display">Round-the-Clock</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-16 mb-4">
                    Hit 1 through 20 in order. Race the clock. Perfect for practice.
                  </p>
                  <ul className="space-y-2 text-14 text-text-secondary">
                    <li>• Multiple variants</li>
                    <li>• Timed challenges</li>
                    <li>• Coming soon!</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Game Setup (X01)
  if (gameMode === "x01" && !gameStarted) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => setGameMode(null)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          <motion.h1 
            className="font-display text-48 font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Setup X01 Game
          </motion.h1>

          {/* Game Variant */}
          <div className="mb-8">
            <h3 className="text-20 font-bold mb-4">Starting Score</h3>
            <div className="flex gap-3">
              {[301, 501, 101].map((variant) => (
                <Toggle
                  key={variant}
                  pressed={x01Variant === variant}
                  onPressedChange={() => setX01Variant(variant as X01Variant)}
                  className="data-[state=on]:bg-[#7C3AED] data-[state=on]:text-white"
                >
                  {variant}
                </Toggle>
              ))}
            </div>
          </div>

          {/* Out Type */}
          <div className="mb-8">
            <h3 className="text-20 font-bold mb-4">Out Type</h3>
            <div className="flex gap-3">
              <Toggle
                pressed={outType === "normal"}
                onPressedChange={() => setOutType("normal")}
                className="data-[state=on]:bg-[#7C3AED] data-[state=on]:text-white"
              >
                Normal Out
              </Toggle>
              <Toggle
                pressed={outType === "double"}
                onPressedChange={() => setOutType("double")}
                className="data-[state=on]:bg-[#7C3AED] data-[state=on]:text-white"
              >
                Double Out
              </Toggle>
            </div>
          </div>

          {/* Players */}
          <div className="mb-8">
            <h3 className="text-20 font-bold mb-4">Players ({players.length}/4)</h3>
            <div className="space-y-3">
              {players.map((player, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={player.name}
                    onChange={(e) => updatePlayerName(index, e.target.value)}
                    placeholder={`Player ${index + 1}`}
                    className="flex-1"
                  />
                  {players.length > 1 && (
                    <Button variant="outline" onClick={() => removePlayer(index)}>
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              {players.length < 4 && (
                <Button variant="outline" onClick={addPlayer} className="w-full">
                  + Add Player
                </Button>
              )}
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-20 py-8 animate-pulse"
            onClick={startGame}
          >
            Start Game
          </Button>
        </div>
      </div>
    );
  }

  // Active Game
  const currentPlayer = players[currentPlayerIndex];
  const turnTotal = currentPlayer.currentTurn.reduce((sum, val) => sum + val, 0);
  const checkoutHint = getCheckoutHint(currentPlayer.score);

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Winner Screen */}
        <AnimatePresence>
          {winner && (
            <motion.div
              className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Trophy className="w-32 h-32 text-[#F97316] mx-auto mb-6" />
                <h1 className="font-display text-72 font-bold mb-4">
                  {winner.name} <span className="text-[#7C3AED]">Wins!</span>
                </h1>
                <p className="text-24 text-text-secondary mb-8">
                  Game complete!
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" onClick={startGame}>
                    Play Again
                  </Button>
                  <Button size="lg" variant="outline" onClick={resetGame}>
                    Menu
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Score Header */}
        <Card className="bg-surface border-white/10 mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Button variant="ghost" size="sm" onClick={resetGame}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Menu
              </Button>
              <h2 className="text-20 font-bold">X01 - {x01Variant} ({outType} out)</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {players.map((player, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg transition-all ${
                    index === currentPlayerIndex
                      ? "bg-[#7C3AED] text-white"
                      : "bg-background"
                  }`}
                >
                  <div className="text-12 opacity-80">{player.name}</div>
                  <div className="font-mono text-32 font-bold">{player.score}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Turn */}
        <Card className="bg-surface border-white/10 mb-6">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h3 className="text-24 font-bold mb-2">
                Current: <span className="text-[#7C3AED]">{currentPlayer.name}</span>
              </h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                {currentPlayer.currentTurn.map((dart, i) => (
                  <div key={i} className="font-mono text-32 font-bold text-[#F97316]">
                    [{dart}]
                  </div>
                ))}
                {Array.from({ length: 3 - currentPlayer.currentTurn.length }).map((_, i) => (
                  <div key={i} className="font-mono text-32 font-bold text-text-secondary/30">
                    [ ]
                  </div>
                ))}
              </div>
              {currentPlayer.currentTurn.length > 0 && (
                <div className="text-20">
                  Turn Total: <span className="font-mono font-bold">{turnTotal}</span>
                </div>
              )}
            </div>

            {checkoutHint && (
              <motion.div
                className="bg-[#7C3AED]/20 border border-[#7C3AED] rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-14 text-[#F97316] mb-1">💡 Checkout Hint</div>
                <div className="font-mono text-18 font-bold">{checkoutHint}</div>
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Dartboard */}
        <div className="mb-6">
          <Dartboard onScore={handleScore} disabled={!!winner} />
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={undoLast}
            disabled={currentPlayer.currentTurn.length === 0}
            className="flex-1"
          >
            <Undo className="w-4 h-4 mr-2" />
            Undo Last
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={recordMiss}
            className="flex-1"
          >
            Miss (0)
          </Button>
        </div>
      </div>
    </div>
  );
}
