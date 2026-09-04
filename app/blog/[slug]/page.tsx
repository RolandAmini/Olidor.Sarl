import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Spectral, Public_Sans } from 'next/font/google'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-spectral',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-public-sans',
})

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params

  // Recherche de l'article par son slug
  const post = await prisma.post.findUnique({
    where: { slug },
  })

  // Si l'article n'existe pas ou n'est pas publié, renvoie une 404
  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className={`${spectral.variable} ${publicSans.variable} bg-[#FAFAF7] text-[#1C2321] min-h-screen font-[family-name:var(--font-public-sans)]`}>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        {/* Bouton retour */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#8A8F8D] hover:text-[#C97A2B] transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux articles
        </Link>

        {/* Méta-informations */}
        <div className="text-xs text-[#8A8F8D] mb-4">
          Publié le {new Date(post.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>

        {/* Titre */}
        <h1 className="font-[family-name:var(--font-spectral)] text-3xl md:text-5xl font-bold leading-tight mb-8">
          {post.title}
        </h1>

        {/* Image de couverture */}
        {post.coverImage && (
          <div className="relative w-full aspect-[16/9] mb-10 rounded-xl overflow-hidden bg-[#1E3A5F]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Contenu de l'article */}
        <article className="prose prose-lg max-w-none text-[#5B6360] leading-relaxed whitespace-pre-line">
          {post.content}
        </article>
      </main>

      <Footer />
    </div>
  )
}