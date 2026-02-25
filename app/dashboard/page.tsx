"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Target,
  Trophy,
  Users,
  Play,
  Plus,
  LogOut,
  BarChart3,
  Clock,
  Award,
  Trash2,
  Loader2,
} from "lucide-react";

interface Player {
  id: string;
  name: string;
  gamesPlayed: number;
  gamesWon: number;
}

interface Game {
  id: string;
  mode: string;
  status: string;
  startingScore?: number;
  winnerId?: string;
  createdAt: string;
  participants: {
    player: { id: string; name: string };
  }[];
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [players, setPlayers] = useState<Player[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [loading, setLoading] = useState(true);
  const [addingPlayer, setAddingPlayer] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      fetchData();
    }
  }, [session]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [playersRes, gamesRes] = await Promise.all([
        fetch("/api/players"),
        fetch("/api/games?limit=10"),
      ]);

      if (playersRes.ok) {
        const playersData = await playersRes.json();
        setPlayers(playersData);
      }

      if (gamesRes.ok) {
        const gamesData = await gamesRes.json();
        setGames(gamesData);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlayer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlayerName.trim()) return;

    setAddingPlayer(true);
    try {
      const res = await fetch("/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newPlayerName.trim() }),
      });

      if (res.ok) {
        const player = await res.json();
        setPlayers([...players, player]);
        setNewPlayerName("");
      }
    } catch (error) {
      console.error("Failed to add player:", error);
    } finally {
      setAddingPlayer(false);
    }
  };

  const getWinnerName = (game: Game) => {
    if (!game.winnerId) return null;
    const winner = game.participants.find((p) => p.player.id === game.winnerId);
    return winner?.player.name || "Unknown";
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#7C3AED]" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const totalGames = games.length;
  const completedGames = games.filter((g) => g.status === "COMPLETED").length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#F97316] flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">OcheScore</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden sm:inline">
              {session.user?.name || session.user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome & Quick Actions */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {session.user?.name?.split(" ")[0] || "Player"}!
          </h1>
          <p className="text-gray-500">Ready to score some darts?</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/app">
            <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] gap-2">
              <Play className="w-4 h-4" />
              New Game
            </Button>
          </Link>
          <Link href="/leaderboard">
            <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
              <Trophy className="w-4 h-4" />
              Leaderboard
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#111] border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm">Total Games</span>
            </div>
            <div className="text-2xl font-bold">{totalGames}</div>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Award className="w-4 h-4" />
              <span className="text-sm">Completed</span>
            </div>
            <div className="text-2xl font-bold text-[#10B981]">{completedGames}</div>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Players</span>
            </div>
            <div className="text-2xl font-bold">{players.length}</div>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-xl p-4">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">In Progress</span>
            </div>
            <div className="text-2xl font-bold text-[#F97316]">
              {games.filter((g) => g.status === "IN_PROGRESS").length}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Players Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7C3AED]" />
              Your Players
            </h2>

            {/* Add Player Form */}
            <form onSubmit={handleAddPlayer} className="flex gap-2 mb-4">
              <Input
                type="text"
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                placeholder="Add new player..."
                className="flex-1 bg-[#111] border-white/10"
              />
              <Button
                type="submit"
                disabled={addingPlayer || !newPlayerName.trim()}
                className="bg-[#7C3AED] hover:bg-[#6D28D9]"
              >
                {addingPlayer ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </Button>
            </form>

            {/* Players List */}
            <div className="space-y-2">
              {players.length === 0 ? (
                <div className="text-center py-8 text-gray-500 bg-[#111] rounded-xl border border-white/5">
                  <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No players yet. Add your first player above!</p>
                </div>
              ) : (
                players.map((player, index) => (
                  <motion.div
                    key={player.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-[#111] rounded-xl border border-white/5"
                  >
                    <div>
                      <div className="font-medium">{player.name}</div>
                      <div className="text-sm text-gray-500">
                        {player.gamesPlayed} games • {player.gamesWon} wins
                      </div>
                    </div>
                    <div className="text-right">
                      {player.gamesPlayed > 0 && (
                        <div className="text-[#10B981] font-bold">
                          {Math.round((player.gamesWon / player.gamesPlayed) * 100)}%
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>

          {/* Recent Games Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#F97316]" />
              Recent Games
            </h2>

            <div className="space-y-2">
              {games.length === 0 ? (
                <div className="text-center py-8 text-gray-500 bg-[#111] rounded-xl border border-white/5">
                  <Target className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No games yet. Start your first game!</p>
                  <Link href="/app">
                    <Button className="mt-4 bg-[#7C3AED] hover:bg-[#6D28D9]">
                      <Play className="w-4 h-4 mr-2" />
                      Start Game
                    </Button>
                  </Link>
                </div>
              ) : (
                games.map((game, index) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-[#111] rounded-xl border border-white/5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {game.mode === "X01" ? `${game.startingScore}` : "Round the Clock"}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            game.status === "COMPLETED"
                              ? "bg-[#10B981]/20 text-[#10B981]"
                              : "bg-[#F97316]/20 text-[#F97316]"
                          }`}
                        >
                          {game.status === "COMPLETED" ? "Finished" : "In Progress"}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">{formatDate(game.createdAt)}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {game.participants.map((p) => p.player.name).join(" vs ")}
                    </div>
                    {game.winnerId && (
                      <div className="mt-2 text-sm">
                        <Trophy className="w-3 h-3 inline text-[#F97316] mr-1" />
                        <span className="text-[#F97316]">{getWinnerName(game)}</span> won
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
