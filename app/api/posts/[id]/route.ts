import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// 1. Mettre à jour un article (PUT)
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { title, summary, content } = await request.json()

    const updatedPost = await prisma.post.update({
      where: { id },
      data: {
        title,
        summary,
        content,
      },
    })

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la modification de l\'article.' },
      { status: 500 }
    )
  }
}

// 2. Supprimer un article (DELETE)
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await prisma.post.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Article supprimé avec succès' })
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de l\'article.' },
      { status: 500 }
    )
  }
}