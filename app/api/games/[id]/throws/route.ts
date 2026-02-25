import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// POST /api/games/[id]/throws - Record a throw
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: gameId } = await params
  const body = await req.json()
  const { playerId, segment, multiplier, roundNum, throwNum } = body
  
  // Validate input
  if (!playerId || segment === undefined || !multiplier || !roundNum || !throwNum) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  
  // Get or create the round
  let round = await db.round.findUnique({
    where: { gameId_roundNum: { gameId, roundNum } }
  })
  
  if (!round) {
    round = await db.round.create({
      data: { gameId, roundNum }
    })
  }
  
  // Calculate value
  const value = segment * multiplier
  
  // Create the throw
  const dartThrow = await db.throw.create({
    data: {
      roundId: round.id,
      playerId,
      throwNum,
      segment,
      multiplier,
      value,
    }
  })
  
  // Update participant stats
  const isMiss = segment === 0
  const isBullseye = segment === 50
  const isOuterBull = segment === 25
  
  await db.gameParticipant.update({
    where: { gameId_playerId: { gameId, playerId } },
    data: {
      dartsThrown: { increment: 1 },
      totalScored: { increment: value },
      ...(isMiss && { misses: { increment: 1 } }),
      ...(isBullseye && { bullseyeHit: { increment: 1 } }),
      ...(isOuterBull && { outerBullHit: { increment: 1 } }),
      ...(multiplier === 1 && !isMiss && !isBullseye && !isOuterBull && { singlesHit: { increment: 1 } }),
      ...(multiplier === 2 && { doublesHit: { increment: 1 } }),
      ...(multiplier === 3 && { triplesHit: { increment: 1 } }),
    }
  })
  
  // Update player lifetime stats
  await db.player.update({
    where: { id: playerId },
    data: {
      totalDarts: { increment: 1 },
      totalPoints: { increment: value },
      ...(value === 180 && { ton80s: { increment: 1 } }),
    }
  })
  
  return NextResponse.json(dartThrow, { status: 201 })
}

// GET /api/games/[id]/throws - Get all throws for a game
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: gameId } = await params
  
  const rounds = await db.round.findMany({
    where: { gameId },
    include: {
      throws: {
        include: {
          player: { select: { id: true, name: true } }
        },
        orderBy: [{ throwNum: 'asc' }]
      }
    },
    orderBy: { roundNum: 'asc' }
  })
  
  return NextResponse.json(rounds)
}
