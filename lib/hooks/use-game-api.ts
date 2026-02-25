"use client";

import { useState, useCallback } from "react";

export interface DbPlayer {
  id: string;
  name: string;
  gamesPlayed: number;
  gamesWon: number;
  totalDarts?: number;
  totalPoints?: number;
  highestCheckout?: number;
  ton80s?: number;
}

export interface DbGame {
  id: string;
  mode: "X01" | "ROUND_THE_CLOCK";
  status: "IN_PROGRESS" | "COMPLETED" | "ABANDONED";
  startingScore?: number;
  doubleOut: boolean;
  rtcEndMode?: "BULLSEYE" | "TWENTY" | "TEN";
  winnerId?: string;
  participants: {
    id: string;
    playerId: string;
    order: number;
    currentScore: number;
    player: { id: string; name: string };
  }[];
}

export function useGameApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all players
  const fetchPlayers = useCallback(async (): Promise<DbPlayer[]> => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/players");
      if (!res.ok) throw new Error("Failed to fetch players");
      return res.json();
    } catch (e: any) {
      setError(e.message);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Create a new player
  const createPlayer = useCallback(async (name: string): Promise<DbPlayer | null> => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("Failed to create player");
      return res.json();
    } catch (e: any) {
      setError(e.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Create a new game
  const createGame = useCallback(async (options: {
    mode: "X01" | "ROUND_THE_CLOCK";
    playerIds: string[];
    startingScore?: number;
    doubleOut?: boolean;
    rtcEndMode?: "BULLSEYE" | "TWENTY" | "TEN";
  }): Promise<DbGame | null> => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(options),
      });
      if (!res.ok) throw new Error("Failed to create game");
      return res.json();
    } catch (e: any) {
      setError(e.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Record a throw
  const recordThrow = useCallback(async (
    gameId: string,
    playerId: string,
    roundNum: number,
    throwNum: number,
    segment: number,
    multiplier: number
  ): Promise<boolean> => {
    try {
      const res = await fetch(`/api/games/${gameId}/throws`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId, segment, multiplier, roundNum, throwNum }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  // End a game
  const endGame = useCallback(async (
    gameId: string,
    status: "COMPLETED" | "ABANDONED",
    winnerId?: string
  ): Promise<boolean> => {
    try {
      const res = await fetch(`/api/games/${gameId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, winnerId }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  // Fetch recent games
  const fetchGames = useCallback(async (options?: {
    status?: string;
    playerId?: string;
    limit?: number;
  }): Promise<DbGame[]> => {
    const params = new URLSearchParams();
    if (options?.status) params.set("status", options.status);
    if (options?.playerId) params.set("playerId", options.playerId);
    if (options?.limit) params.set("limit", options.limit.toString());

    try {
      const res = await fetch(`/api/games?${params}`);
      if (!res.ok) return [];
      return res.json();
    } catch {
      return [];
    }
  }, []);

  return {
    loading,
    error,
    fetchPlayers,
    createPlayer,
    createGame,
    recordThrow,
    endGame,
    fetchGames,
  };
}
