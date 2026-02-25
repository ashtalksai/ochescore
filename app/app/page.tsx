"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Dartboard } from "@/components/dartboard";
import Link from "next/link";
import confetti from "canvas-confetti";
import { ArrowLeft, Undo, Target, Trophy, TrendingUp, Percent, BarChart3 } from "lucide-react";
import { useGameApi, DbPlayer } from "@/lib/hooks/use-game-api";

type GameMode = "x01" | "round-the-clock" | null;
type X01Variant = 301 | 501 | 101;
type OutType = "normal" | "double";
type ClockEndType = "bullseye" | "20" | "10";

interface DartThrow {
  number: number;
  type: string;
  value: number;
  isHit: boolean; // Did it hit the intended target (for round-the-clock) or any scoring area
  targetNumber?: number; // The target we were aiming for (round-the-clock)
}

interface Player {
  name: string;
  score: number;
  currentTurn: DartThrow[];
  history: DartThrow[][]; // Each round's throws
  // Round-the-clock specific
  currentNumber: number;
  // Stats
  totalThrows: number;
  totalHits: number; // Throws that hit a scoring area (not miss)
  totalMisses: number;
  singlesHit: number;
  doublesHit: number;
  triplesHit: number;
  bullseyesHit: number;
  outerBullsHit: number;
}

interface DartScore {
  number: number;
  type: string;
  value: number;
}

const createPlayer = (name: string, startScore: number): Player => ({
  name,
  score: startScore,
  currentTurn: [],
  history: [],
  currentNumber: 1,
  totalThrows: 0,
  totalHits: 0,
  totalMisses: 0,
  singlesHit: 0,
  doublesHit: 0,
  triplesHit: 0,
  bullseyesHit: 0,
  outerBullsHit: 0,
});

export default function AppPage() {
  const [gameMode, setGameMode] = useState<GameMode>(null);
  const [x01Variant, setX01Variant] = useState<X01Variant>(501);
  const [outType, setOutType] = useState<OutType>("normal");
  const [clockEndType, setClockEndType] = useState<ClockEndType>("bullseye");
  const [players, setPlayers] = useState<Player[]>([createPlayer("Player 1", 501)]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState<Player | null>(null);
  const [savedPlayerNames, setSavedPlayerNames] = useState<string[]>([]);
  const [dbPlayers, setDbPlayers] = useState<DbPlayer[]>([]);
  const [currentGameId, setCurrentGameId] = useState<string | null>(null);
  const playerIdMapRef = useRef<Map<string, string>>(new Map()); // name -> dbPlayerId
  
  const { fetchPlayers, createPlayer: createDbPlayer, createGame, endGame } = useGameApi();

  // Load saved players from database
  useEffect(() => {
    const loadPlayers = async () => {
      const players = await fetchPlayers();
      setDbPlayers(players);
      setSavedPlayerNames(players.map(p => p.name));
      // Build name -> id map
      players.forEach(p => playerIdMapRef.current.set(p.name, p.id));
    };
    loadPlayers();
  }, [fetchPlayers]);

  // Create player in DB if doesn't exist
  const ensurePlayerInDb = async (name: string): Promise<string | null> => {
    if (!name || name === 'Player 1') return null;
    
    // Check if already in map
    if (playerIdMapRef.current.has(name)) {
      return playerIdMapRef.current.get(name) || null;
    }
    
    // Create in DB
    const newPlayer = await createDbPlayer(name);
    if (newPlayer) {
      playerIdMapRef.current.set(name, newPlayer.id);
      setDbPlayers(prev => [...prev, newPlayer]);
      setSavedPlayerNames(prev => [...prev, name]);
      return newPlayer.id;
    }
    return null;
  };

  // Calculate stats for a player
  const getPlayerStats = (player: Player) => {
    const hitRate = player.totalThrows > 0 
      ? ((player.totalHits / player.totalThrows) * 100).toFixed(1) 
      : "0.0";
    
    const totalScoringThrows = player.singlesHit + player.doublesHit + player.triplesHit + player.bullseyesHit + player.outerBullsHit;
    
    const singlesRate = totalScoringThrows > 0 
      ? ((player.singlesHit / totalScoringThrows) * 100).toFixed(1) 
      : "0.0";
    
    const doublesRate = totalScoringThrows > 0 
      ? ((player.doublesHit / totalScoringThrows) * 100).toFixed(1) 
      : "0.0";
    
    const triplesRate = totalScoringThrows > 0 
      ? ((player.triplesHit / totalScoringThrows) * 100).toFixed(1) 
      : "0.0";

    // Calculate per-round average
    const totalRounds = player.history.length;
    const totalPoints = player.history.reduce((sum, round) => 
      sum + round.reduce((roundSum, dart) => roundSum + dart.value, 0), 0
    );
    const roundAverage = totalRounds > 0 ? (totalPoints / totalRounds).toFixed(1) : "0.0";
    
    // 3-dart average
    const threeDartAvg = player.totalThrows > 0 
      ? ((totalPoints / player.totalThrows) * 3).toFixed(1) 
      : "0.0";

    return {
      hitRate,
      singlesRate,
      doublesRate,
      triplesRate,
      roundAverage,
      threeDartAvg,
      totalRounds,
      totalPoints,
    };
  };

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

  // Get the end target for round-the-clock
  const getClockEndTarget = (): number | "bull" => {
    switch (clockEndType) {
      case "bullseye": return "bull";
      case "20": return 20;
      case "10": return 10;
    }
  };

  const addPlayer = () => {
    if (players.length < 4) {
      setPlayers([
        ...players,
        createPlayer(`Player ${players.length + 1}`, x01Variant),
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

  const startGame = async () => {
    // Ensure all players exist in DB and get their IDs
    const playerIds: string[] = [];
    for (const p of players) {
      const id = await ensurePlayerInDb(p.name);
      if (id) playerIds.push(id);
    }
    
    // Create game in DB if we have player IDs
    if (playerIds.length > 0) {
      const rtcEndModeMap: Record<string, "BULLSEYE" | "TWENTY" | "TEN"> = {
        "bullseye": "BULLSEYE",
        "20": "TWENTY",
        "10": "TEN",
      };
      
      const game = await createGame({
        mode: gameMode === "x01" ? "X01" : "ROUND_THE_CLOCK",
        playerIds,
        startingScore: gameMode === "x01" ? x01Variant : undefined,
        doubleOut: outType === "double",
        rtcEndMode: gameMode === "round-the-clock" ? rtcEndModeMap[clockEndType] : undefined,
      });
      
      if (game) {
        setCurrentGameId(game.id);
      }
    }
    
    const initializedPlayers = players.map(p => ({
      ...createPlayer(p.name, x01Variant),
      score: gameMode === "x01" ? x01Variant : 0,
    }));
    setPlayers(initializedPlayers);
    setCurrentPlayerIndex(0);
    setGameStarted(true);
    setWinner(null);
  };

  // Quick select a saved player
  const selectSavedPlayer = (index: number, name: string) => {
    const updated = [...players];
    updated[index].name = name;
    setPlayers(updated);
  };

  const updatePlayerStats = (player: Player, dartScore: DartScore, isHit: boolean): Player => {
    const updated = { ...player };
    updated.totalThrows++;
    
    if (dartScore.type === "miss") {
      updated.totalMisses++;
    } else {
      updated.totalHits++;
      
      switch (dartScore.type) {
        case "single":
          updated.singlesHit++;
          break;
        case "double":
          updated.doublesHit++;
          break;
        case "triple":
          updated.triplesHit++;
          break;
        case "bull":
          updated.bullseyesHit++;
          break;
        case "outer-bull":
          updated.outerBullsHit++;
          break;
      }
    }
    
    return updated;
  };

  const handleX01Score = (dartScore: DartScore) => {
    if (winner) return;

    const currentPlayer = players[currentPlayerIndex];
    const dartThrow: DartThrow = {
      ...dartScore,
      isHit: dartScore.type !== "miss",
    };
    
    let updatedPlayer = updatePlayerStats({ ...currentPlayer }, dartScore, dartScore.type !== "miss");
    const newTurn = [...updatedPlayer.currentTurn, dartThrow];
    updatedPlayer.currentTurn = newTurn;

    // Calculate starting score for this turn (before any darts were thrown)
    // We need to add back the value of previous darts in this turn since score was updated mid-turn
    const previousDartsValue = currentPlayer.currentTurn.reduce((sum, dart) => sum + dart.value, 0);
    const startOfTurnScore = currentPlayer.score + previousDartsValue;
    
    // Calculate score after all darts in this turn
    const turnTotal = newTurn.reduce((sum, dart) => sum + dart.value, 0);
    const newScore = startOfTurnScore - turnTotal;

    // Check for valid finish (can happen on any dart, not just 3rd)
    let isValidFinish = false;
    if (newScore === 0) {
      if (outType === "double") {
        isValidFinish = dartScore.type === "double" || dartScore.type === "bull";
      } else {
        isValidFinish = true;
      }
    }

    // Check for bust (went below 0, or exactly 0 without valid double-out)
    const isBust = newScore < 0 || 
      (newScore === 1 && outType === "double") || // Can't finish on 1 with double-out
      (newScore === 0 && outType === "double" && dartScore.type !== "double" && dartScore.type !== "bull");

    if (isValidFinish) {
      // WINNER! Game ends immediately
      updatedPlayer.score = 0;
      updatedPlayer.history = [...updatedPlayer.history, newTurn];
      updatedPlayer.currentTurn = [];
      
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = updatedPlayer;
      setPlayers(updatedPlayers);
      setWinner(updatedPlayer);
      
      // Save game result to DB
      const winnerId = playerIdMapRef.current.get(updatedPlayer.name);
      if (currentGameId && winnerId) {
        endGame(currentGameId, "COMPLETED", winnerId);
      }
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#F97316', '#10B981'],
      });
    } else if (isBust) {
      // Bust - score resets to start of turn, move to next player
      updatedPlayer.score = startOfTurnScore; // Reset to start of turn
      updatedPlayer.history = [...updatedPlayer.history, newTurn];
      updatedPlayer.currentTurn = [];
      
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = updatedPlayer;
      setPlayers(updatedPlayers);
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    } else if (newTurn.length === 3) {
      // Turn complete (3 darts thrown, no finish, no bust)
      updatedPlayer.score = newScore;
      updatedPlayer.history = [...updatedPlayer.history, newTurn];
      updatedPlayer.currentTurn = [];
      
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = updatedPlayer;
      setPlayers(updatedPlayers);
      setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
    } else {
      // Mid-turn: update score display but don't end turn yet
      updatedPlayer.score = newScore;
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = updatedPlayer;
      setPlayers(updatedPlayers);
    }
  };

  const handleClockScore = (dartScore: DartScore) => {
    if (winner) return;

    const currentPlayer = players[currentPlayerIndex];
    const endTarget = getClockEndTarget();
    const targetNumber = currentPlayer.currentNumber;
    
    // Determine if this hit advances us
    let advanceBy = 0;
    let isHit = false;
    
    // Check if we're at the bullseye stage
    const endNum = endTarget === "bull" ? 21 : endTarget;
    const atBullseyeStage = endTarget === "bull" && targetNumber > 20;
    
    if (atBullseyeStage) {
      // At bullseye stage - need to hit bull or outer-bull
      if (dartScore.type === "bull") {
        isHit = true;
        advanceBy = 1; // Win!
      } else if (dartScore.type === "outer-bull") {
        // Double outer bullseye counts as bullseye
        isHit = true;
        advanceBy = 1; // Win!
      }
    } else {
      // Normal number targeting
      if (dartScore.number === targetNumber) {
        isHit = true;
        if (dartScore.type === "triple") {
          advanceBy = 3;
        } else if (dartScore.type === "double") {
          advanceBy = 2;
        } else {
          advanceBy = 1;
        }
      }
    }
    
    const dartThrow: DartThrow = {
      ...dartScore,
      isHit,
      targetNumber,
    };
    
    let updatedPlayer = updatePlayerStats({ ...currentPlayer }, dartScore, isHit);
    const newTurn = [...updatedPlayer.currentTurn, dartThrow];
    updatedPlayer.currentTurn = newTurn;
    
    // Calculate new current number
    let newCurrentNumber = updatedPlayer.currentNumber + advanceBy;
    
    // Cap at the end target
    if (endTarget === "bull") {
      if (newCurrentNumber > 21) newCurrentNumber = 21; // 21 = bullseye stage
    } else {
      if (newCurrentNumber > endTarget) newCurrentNumber = endTarget + 1; // Win condition
    }
    
    updatedPlayer.currentNumber = newCurrentNumber;
    updatedPlayer.score = newCurrentNumber - 1; // Score = progress
    
    // Check for win
    const hasWon = (endTarget === "bull" && newCurrentNumber > 21 && isHit && (dartScore.type === "bull" || dartScore.type === "outer-bull")) ||
                   (endTarget !== "bull" && newCurrentNumber > endTarget);
    
    // Check if turn is complete (3 darts)
    if (newTurn.length === 3 || hasWon) {
      updatedPlayer.history = [...updatedPlayer.history, newTurn];
      updatedPlayer.currentTurn = [];
      
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = updatedPlayer;
      setPlayers(updatedPlayers);
      
      if (hasWon) {
        setWinner(updatedPlayer);
        
        // Save game result to DB
        const winnerId = playerIdMapRef.current.get(updatedPlayer.name);
        if (currentGameId && winnerId) {
          endGame(currentGameId, "COMPLETED", winnerId);
        }
        
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#7C3AED', '#F97316', '#10B981'],
        });
      } else {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
      }
    } else {
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = updatedPlayer;
      setPlayers(updatedPlayers);
    }
  };

  const handleScore = (dartScore: DartScore) => {
    if (gameMode === "x01") {
      handleX01Score(dartScore);
    } else if (gameMode === "round-the-clock") {
      handleClockScore(dartScore);
    }
  };

  const undoLast = () => {
    const currentPlayer = players[currentPlayerIndex];
    if (currentPlayer.currentTurn.length > 0) {
      const lastThrow = currentPlayer.currentTurn[currentPlayer.currentTurn.length - 1];
      const updatedPlayer = { ...currentPlayer };
      
      // Reverse stats
      updatedPlayer.totalThrows--;
      if (lastThrow.type === "miss") {
        updatedPlayer.totalMisses--;
      } else {
        updatedPlayer.totalHits--;
        switch (lastThrow.type) {
          case "single": updatedPlayer.singlesHit--; break;
          case "double": updatedPlayer.doublesHit--; break;
          case "triple": updatedPlayer.triplesHit--; break;
          case "bull": updatedPlayer.bullseyesHit--; break;
          case "outer-bull": updatedPlayer.outerBullsHit--; break;
        }
      }
      
      // For round-the-clock, reverse progress
      if (gameMode === "round-the-clock" && lastThrow.isHit) {
        let reverseBy = 1;
        if (lastThrow.type === "double") reverseBy = 2;
        if (lastThrow.type === "triple") reverseBy = 3;
        updatedPlayer.currentNumber = Math.max(1, updatedPlayer.currentNumber - reverseBy);
        updatedPlayer.score = updatedPlayer.currentNumber - 1;
      }
      
      updatedPlayer.currentTurn = currentPlayer.currentTurn.slice(0, -1);
      
      const updatedPlayers = [...players];
      updatedPlayers[currentPlayerIndex] = updatedPlayer;
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
    setPlayers([createPlayer("Player 1", 501)]);
    setCurrentPlayerIndex(0);
  };

  // Mode Selection
  if (!gameMode) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link href="/leaderboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 text-[#F97316] hover:bg-[#F97316]/20 transition-colors">
              <Trophy className="w-4 h-4" />
              Leaderboard
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
                className="bg-surface border-white/10 hover:border-[#F97316] hover:shadow-lg hover:shadow-[#F97316]/20 cursor-pointer transition-all h-full"
                onClick={() => setGameMode("round-the-clock")}
              >
                <CardHeader>
                  <Trophy className="w-16 h-16 text-[#F97316] mb-4" />
                  <CardTitle className="text-32 font-display">Round-the-Clock</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary text-16 mb-4">
                    Hit 1 through 20 in order. Doubles skip 2, triples skip 3!
                  </p>
                  <ul className="space-y-2 text-14 text-text-secondary">
                    <li>• Multiple end variations</li>
                    <li>• Great for practice</li>
                    <li>• 1-4 players</li>
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
            
            {/* Saved player quick picks with stats */}
            {dbPlayers.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Quick pick (tap to add):</p>
                <div className="flex flex-wrap gap-2">
                  {dbPlayers.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => selectSavedPlayer(players.length - 1, p.name)}
                      className="px-3 py-1.5 text-sm bg-[#7C3AED]/20 hover:bg-[#7C3AED]/40 rounded-full text-[#7C3AED] transition-colors flex items-center gap-2"
                    >
                      <span>{p.name}</span>
                      {p.gamesPlayed > 0 && (
                        <span className="text-xs text-gray-400">
                          {p.gamesWon}W/{p.gamesPlayed - p.gamesWon}L
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
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

  // Game Setup (Round-the-Clock)
  if (gameMode === "round-the-clock" && !gameStarted) {
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
            Setup Round-the-Clock
          </motion.h1>

          {/* End Type */}
          <div className="mb-8">
            <h3 className="text-20 font-bold mb-4">End Target</h3>
            <p className="text-text-secondary mb-4">Where does the game end?</p>
            <div className="flex flex-wrap gap-3">
              <Toggle
                pressed={clockEndType === "bullseye"}
                onPressedChange={() => setClockEndType("bullseye")}
                className="data-[state=on]:bg-[#F97316] data-[state=on]:text-white"
              >
                🎯 Bullseye (1-20, then bull)
              </Toggle>
              <Toggle
                pressed={clockEndType === "20"}
                onPressedChange={() => setClockEndType("20")}
                className="data-[state=on]:bg-[#F97316] data-[state=on]:text-white"
              >
                End at 20
              </Toggle>
              <Toggle
                pressed={clockEndType === "10"}
                onPressedChange={() => setClockEndType("10")}
                className="data-[state=on]:bg-[#F97316] data-[state=on]:text-white"
              >
                End at 10 (quick game)
              </Toggle>
            </div>
            <p className="text-text-secondary text-14 mt-3">
              💡 Double hits skip 2 numbers, triple hits skip 3!
              {clockEndType === "bullseye" && " Outer bullseye counts as bullseye to win."}
            </p>
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
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white text-20 py-8 animate-pulse"
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
  const turnTotal = currentPlayer.currentTurn.reduce((sum, dart) => sum + dart.value, 0);
  const checkoutHint = gameMode === "x01" ? getCheckoutHint(currentPlayer.score) : "";
  const currentStats = getPlayerStats(currentPlayer);

  // Winner screen with detailed stats
  if (winner) {
    const winnerStats = getPlayerStats(winner);
    
    return (
      <div className="min-h-screen bg-background p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Trophy className="w-24 h-24 text-[#F97316] mx-auto mb-4" />
            <h1 className="font-display text-56 font-bold mb-2">
              {winner.name} <span className="text-[#7C3AED]">Wins!</span>
            </h1>
            <p className="text-20 text-text-secondary">
              {gameMode === "x01" ? `X01 - ${x01Variant}` : `Round-the-Clock (${clockEndType})`}
            </p>
          </motion.div>

          {/* Winner Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-surface border-white/10 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#7C3AED]" />
                  Game Summary - {winner.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-12 text-text-secondary mb-1">Hit Rate</div>
                    <div className="font-mono text-28 font-bold text-[#10B981]">{winnerStats.hitRate}%</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-12 text-text-secondary mb-1">3-Dart Avg</div>
                    <div className="font-mono text-28 font-bold text-[#7C3AED]">{winnerStats.threeDartAvg}</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-12 text-text-secondary mb-1">Total Rounds</div>
                    <div className="font-mono text-28 font-bold text-[#F97316]">{winnerStats.totalRounds}</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg text-center">
                    <div className="text-12 text-text-secondary mb-1">Total Points</div>
                    <div className="font-mono text-28 font-bold">{winnerStats.totalPoints}</div>
                  </div>
                </div>

                {/* Segment Breakdown */}
                <h4 className="text-16 font-bold mb-3">Segment Accuracy</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-12 text-text-secondary">Singles</div>
                    <div className="font-mono text-20 font-bold">{winner.singlesHit}</div>
                    <div className="text-12 text-[#10B981]">{winnerStats.singlesRate}%</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-12 text-text-secondary">Doubles</div>
                    <div className="font-mono text-20 font-bold text-[#DC2626]">{winner.doublesHit}</div>
                    <div className="text-12 text-[#10B981]">{winnerStats.doublesRate}%</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-12 text-text-secondary">Triples</div>
                    <div className="font-mono text-20 font-bold text-[#7C3AED]">{winner.triplesHit}</div>
                    <div className="text-12 text-[#10B981]">{winnerStats.triplesRate}%</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-12 text-text-secondary">Bullseyes</div>
                    <div className="font-mono text-20 font-bold text-[#7C3AED]">{winner.bullseyesHit}</div>
                  </div>
                  <div className="bg-background p-3 rounded-lg">
                    <div className="text-12 text-text-secondary">Outer Bulls</div>
                    <div className="font-mono text-20 font-bold text-[#F97316]">{winner.outerBullsHit}</div>
                  </div>
                </div>

                {/* Throw Breakdown */}
                <div className="mt-4 p-4 bg-background rounded-lg">
                  <div className="flex justify-between text-14">
                    <span className="text-text-secondary">Total Throws:</span>
                    <span className="font-mono font-bold">{winner.totalThrows}</span>
                  </div>
                  <div className="flex justify-between text-14">
                    <span className="text-text-secondary">Hits:</span>
                    <span className="font-mono font-bold text-[#10B981]">{winner.totalHits}</span>
                  </div>
                  <div className="flex justify-between text-14">
                    <span className="text-text-secondary">Misses:</span>
                    <span className="font-mono font-bold text-[#EF4444]">{winner.totalMisses}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* All Players Stats */}
          {players.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-surface border-white/10 mb-6">
                <CardHeader>
                  <CardTitle>All Players</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {players.map((player, index) => {
                      const stats = getPlayerStats(player);
                      const isWinner = player.name === winner.name;
                      return (
                        <div 
                          key={index} 
                          className={`p-4 rounded-lg ${isWinner ? 'bg-[#7C3AED]/20 border border-[#7C3AED]' : 'bg-background'}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold">{player.name} {isWinner && '🏆'}</span>
                            <span className="font-mono text-20">{stats.hitRate}% hit</span>
                          </div>
                          <div className="grid grid-cols-4 gap-2 text-12">
                            <div>
                              <span className="text-text-secondary">3DA:</span>{' '}
                              <span className="font-mono">{stats.threeDartAvg}</span>
                            </div>
                            <div>
                              <span className="text-text-secondary">Rounds:</span>{' '}
                              <span className="font-mono">{stats.totalRounds}</span>
                            </div>
                            <div>
                              <span className="text-text-secondary">Hits:</span>{' '}
                              <span className="font-mono text-[#10B981]">{player.totalHits}</span>
                            </div>
                            <div>
                              <span className="text-text-secondary">Miss:</span>{' '}
                              <span className="font-mono text-[#EF4444]">{player.totalMisses}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={startGame} className="bg-[#7C3AED] hover:bg-[#6D28D9]">
              Play Again
            </Button>
            <Button size="lg" variant="outline" onClick={resetGame}>
              Menu
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Active game view - DARTBOARD FIRST layout
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Compact Header */}
      <div className="flex items-center justify-between p-2 border-b border-white/10">
        <Button variant="ghost" size="sm" onClick={resetGame}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="text-center">
          <div className="font-mono text-2xl font-bold text-[#7C3AED]">
            {gameMode === "x01" ? currentPlayer.score : (currentPlayer.currentNumber > 20 ? "🎯" : currentPlayer.currentNumber)}
          </div>
          <div className="text-xs text-gray-400">{currentPlayer.name}</div>
        </div>
        <div className="flex gap-1">
          {currentPlayer.currentTurn.map((dart, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 rounded text-sm flex items-center justify-center font-mono font-bold ${
                dart.isHit 
                  ? 'bg-[#10B981]/20 text-[#10B981]' 
                  : 'bg-[#F97316]/20 text-[#F97316]'
              }`}
            >
              {dart.value}
            </div>
          ))}
          {Array.from({ length: 3 - currentPlayer.currentTurn.length }).map((_, i) => (
            <div key={i} className="w-8 h-8 rounded border border-dashed border-gray-600 flex items-center justify-center text-gray-600 text-xs">
              —
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Hint (if applicable) */}
      {checkoutHint && (
        <div className="bg-[#7C3AED]/20 px-3 py-1 text-center text-sm">
          <span className="text-[#F97316]">💡</span> {checkoutHint}
        </div>
      )}

      {/* DARTBOARD - Takes up most of the screen */}
      <div className="flex-1 flex items-center justify-center p-2">
        <div className="w-full max-w-[95vw] md:max-w-xl">
          <Dartboard 
            onScore={handleScore} 
            disabled={!!winner}
            highlightNumber={gameMode === "round-the-clock" && currentPlayer.currentNumber <= 20 ? currentPlayer.currentNumber : undefined}
            highlightBull={gameMode === "round-the-clock" && currentPlayer.currentNumber > 20}
          />
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="p-3 border-t border-white/10">
        <div className="flex gap-2 max-w-xl mx-auto">
          <Button
            variant="outline"
            size="lg"
            onClick={undoLast}
            disabled={currentPlayer.currentTurn.length === 0}
            className="flex-1"
          >
            <Undo className="w-4 h-4 mr-1" />
            Undo
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
        
        {/* Multi-player score bar */}
        {players.length > 1 && (
          <div className="flex gap-2 mt-2 max-w-xl mx-auto overflow-x-auto">
            {players.map((player, index) => (
              <div
                key={index}
                className={`flex-1 min-w-[70px] p-2 rounded text-center text-sm ${
                  index === currentPlayerIndex
                    ? "bg-[#7C3AED] text-white"
                    : "bg-[#1a1a1a]"
                }`}
              >
                <div className="truncate text-xs">{player.name}</div>
                <div className="font-mono font-bold">
                  {gameMode === "x01" ? player.score : (player.currentNumber > 20 ? "🎯" : player.currentNumber)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
