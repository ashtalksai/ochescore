import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/games/[id] - Get game details
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  
  const game = await db.game.findUnique({
    where: { id },
    include: {
      participants: {
        include: {
          player: { select: { id: true, name: true } }
        },
        orderBy: { order: 'asc' }
      },
      rounds: {
        include: {
          throws: {
            include: {
              player: { select: { id: true, name: true } }
            },
            orderBy: { throwNum: 'asc' }
          }
        },
        orderBy: { roundNum: 'asc' }
      }
    }
  })
  
  if (!game) {
    return NextResponse.json({ error: 'Game not found' }, { status: 404 })
  }
  
  return NextResponse.json(game)
}

// PATCH /api/games/[id] - Update game (e.g., finish game)
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await req.json()
  const { status, winnerId } = body
  
  const game = await db.game.update({
    where: { id },
    data: {
      ...(status && { status }),
      ...(winnerId && { winnerId }),
      ...(status === 'COMPLETED' && { finishedAt: new Date() }),
    },
    include: {
      participants: {
        include: {
          player: { select: { id: true, name: true } }
        }
      }
    }
  })
  
  // Update player stats if game completed with a winner
  if (status === 'COMPLETED' && winnerId) {
    // Increment games played for all participants
    await db.player.updateMany({
      where: {
        id: { in: game.participants.map(p => p.playerId) }
      },
      data: { gamesPlayed: { increment: 1 } }
    })
    
    // Increment games won for winner
    await db.player.update({
      where: { id: winnerId },
      data: { gamesWon: { increment: 1 } }
    })
  }
  
  return NextResponse.json(game)
}
