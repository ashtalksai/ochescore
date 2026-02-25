import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/leaderboard - Get player rankings with stats
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const sortBy = searchParams.get('sort') || 'gamesWon' // gamesWon, winRate, accuracy, avgScore
  const limit = parseInt(searchParams.get('limit') || '50')

  // Get all players with their game participation stats
  const players = await db.player.findMany({
    where: {
      gamesPlayed: { gt: 0 } // Only players who have played
    },
    include: {
      gameParticipants: {
        select: {
          dartsThrown: true,
          totalScored: true,
          singlesHit: true,
          doublesHit: true,
          triplesHit: true,
          bullseyeHit: true,
          outerBullHit: true,
          misses: true,
        }
      }
    }
  })

  // Calculate stats for each player
  const leaderboard = players.map(player => {
    // Aggregate stats from all games
    const totals = player.gameParticipants.reduce((acc, gp) => ({
      dartsThrown: acc.dartsThrown + gp.dartsThrown,
      totalScored: acc.totalScored + gp.totalScored,
      singlesHit: acc.singlesHit + gp.singlesHit,
      doublesHit: acc.doublesHit + gp.doublesHit,
      triplesHit: acc.triplesHit + gp.triplesHit,
      bullseyeHit: acc.bullseyeHit + gp.bullseyeHit,
      outerBullHit: acc.outerBullHit + gp.outerBullHit,
      misses: acc.misses + gp.misses,
    }), {
      dartsThrown: 0,
      totalScored: 0,
      singlesHit: 0,
      doublesHit: 0,
      triplesHit: 0,
      bullseyeHit: 0,
      outerBullHit: 0,
      misses: 0,
    })

    const totalHits = totals.singlesHit + totals.doublesHit + totals.triplesHit + totals.bullseyeHit + totals.outerBullHit
    const accuracy = totals.dartsThrown > 0 
      ? ((totalHits / totals.dartsThrown) * 100) 
      : 0
    const avgPerDart = totals.dartsThrown > 0 
      ? (totals.totalScored / totals.dartsThrown) 
      : 0
    const avg3Dart = avgPerDart * 3 // Standard 3-dart average
    const winRate = player.gamesPlayed > 0 
      ? ((player.gamesWon / player.gamesPlayed) * 100) 
      : 0

    return {
      id: player.id,
      name: player.name,
      gamesPlayed: player.gamesPlayed,
      gamesWon: player.gamesWon,
      winRate: Math.round(winRate * 10) / 10,
      accuracy: Math.round(accuracy * 10) / 10,
      avg3Dart: Math.round(avg3Dart * 10) / 10,
      totalDarts: totals.dartsThrown,
      totalPoints: totals.totalScored,
      ton80s: player.ton80s,
      highestCheckout: player.highestCheckout,
      doublesHit: totals.doublesHit,
      triplesHit: totals.triplesHit,
      bullseyes: totals.bullseyeHit,
    }
  })

  // Sort by requested field
  const sortFunctions: Record<string, (a: typeof leaderboard[0], b: typeof leaderboard[0]) => number> = {
    gamesWon: (a, b) => b.gamesWon - a.gamesWon,
    winRate: (a, b) => b.winRate - a.winRate,
    accuracy: (a, b) => b.accuracy - a.accuracy,
    avgScore: (a, b) => b.avg3Dart - a.avg3Dart,
    gamesPlayed: (a, b) => b.gamesPlayed - a.gamesPlayed,
  }

  const sortFn = sortFunctions[sortBy] || sortFunctions.gamesWon
  leaderboard.sort(sortFn)

  // Add rank
  const ranked = leaderboard.slice(0, limit).map((player, index) => ({
    rank: index + 1,
    ...player,
  }))

  return NextResponse.json(ranked)
}
