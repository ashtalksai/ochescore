"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Percent, 
  Medal,
  ArrowLeft,
  Crown,
  Flame,
  Zap
} from "lucide-react";

interface PlayerStats {
  rank: number;
  id: string;
  name: string;
  gamesPlayed: number;
  gamesWon: number;
  winRate: number;
  accuracy: number;
  avg3Dart: number;
  totalDarts: number;
  totalPoints: number;
  ton80s: number;
  highestCheckout: number;
  doublesHit: number;
  triplesHit: number;
  bullseyes: number;
}

type SortOption = "gamesWon" | "winRate" | "accuracy" | "avgScore" | "gamesPlayed";

const sortLabels: Record<SortOption, string> = {
  gamesWon: "Wins",
  winRate: "Win Rate",
  accuracy: "Accuracy",
  avgScore: "3-Dart Avg",
  gamesPlayed: "Games Played",
};

export default function LeaderboardPage() {
  const [players, setPlayers] = useState<PlayerStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>("gamesWon");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/leaderboard?sort=${sortBy}`);
        if (res.ok) {
          const data = await res.json();
          setPlayers(data);
        }
      } catch (e) {
        console.error("Failed to fetch leaderboard:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, [sortBy]);

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-300" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="w-6 text-center text-gray-500 font-mono">{rank}</span>;
  };

  const getRankBg = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-500/20 to-transparent border-yellow-500/30";
    if (rank === 2) return "bg-gradient-to-r from-gray-400/10 to-transparent border-gray-400/20";
    if (rank === 3) return "bg-gradient-to-r from-amber-600/10 to-transparent border-amber-600/20";
    return "bg-[#111] border-white/5";
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/app" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Game</span>
          </Link>
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-[#F97316]" />
            <h1 className="text-xl font-bold">Leaderboard</h1>
          </div>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Sort options */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(Object.keys(sortLabels) as SortOption[]).map((option) => (
            <button
              key={option}
              onClick={() => setSortBy(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                sortBy === option
                  ? "bg-[#7C3AED] text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {sortLabels[option]}
            </button>
          ))}
        </div>

        {/* Leaderboard */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading...
          </div>
        ) : players.length === 0 ? (
          <div className="text-center py-20">
            <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">No games played yet</h2>
            <p className="text-gray-500 mb-6">Be the first on the leaderboard!</p>
            <Link href="/app">
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                Start Playing
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {players.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl border ${getRankBg(player.rank)}`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="flex-shrink-0 w-8 flex justify-center">
                    {getRankIcon(player.rank)}
                  </div>

                  {/* Name & basic stats */}
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-lg truncate">{player.name}</div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                      <span>{player.gamesPlayed} games</span>
                      <span className="text-[#10B981]">{player.gamesWon} wins</span>
                    </div>
                  </div>

                  {/* Key stat (based on sort) */}
                  <div className="text-right flex-shrink-0">
                    {sortBy === "gamesWon" && (
                      <div className="text-2xl font-bold text-[#10B981]">{player.gamesWon}</div>
                    )}
                    {sortBy === "winRate" && (
                      <div className="text-2xl font-bold text-[#7C3AED]">{player.winRate}%</div>
                    )}
                    {sortBy === "accuracy" && (
                      <div className="text-2xl font-bold text-[#F97316]">{player.accuracy}%</div>
                    )}
                    {sortBy === "avgScore" && (
                      <div className="text-2xl font-bold text-[#7C3AED]">{player.avg3Dart}</div>
                    )}
                    {sortBy === "gamesPlayed" && (
                      <div className="text-2xl font-bold text-white">{player.gamesPlayed}</div>
                    )}
                    <div className="text-xs text-gray-500">{sortLabels[sortBy]}</div>
                  </div>
                </div>

                {/* Expanded stats for top 3 */}
                {player.rank <= 3 && (
                  <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold">{player.avg3Dart}</div>
                      <div className="text-xs text-gray-500">3-Dart Avg</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">{player.accuracy}%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-[#F97316]">{player.ton80s}</div>
                      <div className="text-xs text-gray-500">180s</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold">{player.highestCheckout}</div>
                      <div className="text-xs text-gray-500">High Checkout</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Stats legend */}
        {players.length > 0 && (
          <div className="mt-8 p-4 rounded-xl bg-[#111] border border-white/5">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#7C3AED]" />
              Stats Explained
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-400">
              <div><span className="text-white font-medium">3-Dart Avg:</span> Average points per 3 darts</div>
              <div><span className="text-white font-medium">Accuracy:</span> % of darts that hit (not miss)</div>
              <div><span className="text-white font-medium">180s:</span> Perfect rounds (3x Triple 20)</div>
              <div><span className="text-white font-medium">High Checkout:</span> Best finishing score</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
