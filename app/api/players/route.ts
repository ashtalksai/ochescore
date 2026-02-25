import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

// GET /api/players - List all players (or filter by userId)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')
  
  const players = await db.player.findMany({
    where: userId ? { userId } : undefined,
    orderBy: { name: 'asc' },
    select: {
      id: true,
      name: true,
      gamesPlayed: true,
      gamesWon: true,
      totalDarts: true,
      totalPoints: true,
      highestCheckout: true,
      ton80s: true,
    }
  })
  
  return NextResponse.json(players)
}

// POST /api/players - Create a new player
export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, userId } = body
  
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }
  
  const player = await db.player.create({
    data: {
      name: name.trim(),
      userId: userId || null,
    },
    select: {
      id: true,
      name: true,
      gamesPlayed: true,
      gamesWon: true,
    }
  })
  
  return NextResponse.json(player, { status: 201 })
}
