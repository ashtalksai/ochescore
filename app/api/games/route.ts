import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/games - List games with optional filters
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  const playerId = searchParams.get('playerId')
  const limit = parseInt(searchParams.get('limit') || '20')
  
  const games = await db.game.findMany({
    where: {
      ...(status && { status: status as any }),
      ...(playerId && {
        participants: { some: { playerId } }
      }),
    },
    include: {
      participants: {
        include: {
          player: { select: { id: true, name: true } }
        },
        orderBy: { order: 'asc' }
      }
    },
    orderBy: { createdAt: 'desc' },
    take: limit,
  })
  
  return NextResponse.json(games)
}

// POST /api/games - Create a new game
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { mode, playerIds, startingScore, doubleOut, rtcEndMode } = body
  
  if (!playerIds || !Array.isArray(playerIds) || playerIds.length < 1) {
    return NextResponse.json({ error: 'At least one player required' }, { status: 400 })
  }
  
  if (mode === 'X01' && !startingScore) {
    return NextResponse.json({ error: 'Starting score required for X01' }, { status: 400 })
  }
  
  const game = await db.game.create({
    data: {
      mode: mode || 'X01',
      startingScore: startingScore || null,
      doubleOut: doubleOut || false,
      rtcEndMode: rtcEndMode || null,
      participants: {
        create: playerIds.map((playerId: string, index: number) => ({
          playerId,
          order: index,
          currentScore: mode === 'X01' ? startingScore : 1, // X01: start from score; RTC: start from 1
        }))
      }
    },
    include: {
      participants: {
        include: {
          player: { select: { id: true, name: true } }
        },
        orderBy: { order: 'asc' }
      }
    }
  })
  
  return NextResponse.json(game, { status: 201 })
}
