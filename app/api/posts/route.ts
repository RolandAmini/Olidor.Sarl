import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// 1. AJOUT : Récupération de la liste des articles (pour /admin et /blog)
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de la récupération des articles.' },
      { status: 500 }
    )
  }
}

// 2. VOTRE CODE : Création d'un article
export async function POST(request: Request) {
  try {
    const { title, summary, content, coverImage } = await request.json()

    if (!title || !summary || !content || !coverImage) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis.' },
        { status: 400 }
      )
    }

    // Génération automatique d'un slug unique basé sur le titre
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '') + `-${Date.now()}`

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        summary,
        coverImage,
        content,
        published: true,
      },
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Erreur lors de la création du post:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de la création de l\'article.' },
      { status: 500 }
    )
  }
}