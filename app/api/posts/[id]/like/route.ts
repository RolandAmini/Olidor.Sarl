import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: slug } = await params
  const { action } = await req.json()

  if (action === 'unlike') {
    await prisma.post.updateMany({
      where: { slug, likes: { gt: 0 } },
      data: { likes: { decrement: 1 } },
    })
  } else {
    await prisma.post.update({
      where: { slug },
      data: { likes: { increment: 1 } },
    })
  }

  const post = await prisma.post.findUnique({
    where: { slug },
    select: { likes: true },
  })
  return NextResponse.json({ likes: post?.likes ?? 0 })
}