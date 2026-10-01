import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import PostActions from '@/components/PostActions'
import { Spectral, Public_Sans } from 'next/font/google'

export const revalidate = 0

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-spectral',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-public-sans',
})

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

function readingTime(text: string) {
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params

  const post = await prisma.post.findUnique({
    where: { slug },
  })

  if (!post || !post.published) {
    notFound()
  }

  const content = post.content ?? ''

  const date = new Date(post.createdAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // Le texte est découpé en blocs séparés par une ligne vide.
  // Un bloc qui commence par "## " devient un sous-titre en gras.
  const blocks = content
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean)

  const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/blog/${post.slug}`
  const shareText = encodeURIComponent(post.title)

  const shareLinks = [
    {
      label: 'Facebook',
      href: `https://www.facebook.com/profile.php?id=61570966918203%2Fprofile%2Fsharer%2Fsharer.php%3Fu%3D%2Fblog%2Fcombattre-ebola-au-nord-kivu-lengagement-sur-le-terrain-dolidor-sarl-aux-cts-de-ses-partenaires-1788467528373/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/company/115828423/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ]

  return (
    <div
      className={`${spectral.variable} ${publicSans.variable} bg-white text-[#242424] min-h-screen flex flex-col font-[family-name:var(--font-public-sans)]`}
    >
      <Navbar />
      <ReadingProgress />

      <main className="flex-1 px-5 pt-28 pb-20">
        <article className="mx-auto w-full max-w-[680px]">
          {/* Titre */}
          <h1 className="text-[32px] sm:text-[44px] leading-[1.15] font-extrabold tracking-tight text-[#242424]">
            {post.title}
          </h1>

          {/* Auteur */}
          <div className="flex items-center gap-3 mt-8">
            <div className="h-11 w-11 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
              OS
            </div>
            <div className="text-sm leading-snug">
              <p className="font-medium text-[#242424]">Olidor SARL</p>
              <p className="text-[#6B6B6B]">
                {readingTime(content)} min de lecture · {date}
              </p>
            </div>
          </div>

          {/* Barre d'actions (haut) : retour + liens de partage texte */}
          <div className="flex items-center justify-between gap-4 border-y border-[#F2F2F2] py-3 mt-8 text-sm text-green-700">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Tous les articles
            </Link>

            <div className="flex items-center gap-4 sm:gap-5">
              {shareLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Image de couverture */}
          {post.coverImage && (
            <div className="relative w-full aspect-[16/9] mt-8 bg-[#F7F7F7] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 720px) 100vw, 680px"
                className="object-contain"
              />
            </div>
          )}

          {/* Contenu */}
          <div className="mt-10 font-[family-name:var(--font-spectral)] text-[20px] leading-[32px] text-[#242424]">
            {blocks.map((block, i) =>
              block.startsWith('## ') ? (
                <h2
                  key={i}
                  className="font-[family-name:var(--font-public-sans)] text-[26px] leading-tight font-extrabold tracking-tight mt-12 mb-3"
                >
                  {block.replace(/^##\s+/, '')}
                </h2>
              ) : (
                <p key={i} className="mb-8 whitespace-pre-line">
                  {block}
                </p>
              )
            )}
          </div>

          {/* Barre d'actions (bas) : clap + partage */}
          <div className="flex items-center justify-between border-y border-[#F2F2F2] py-3 mt-14">
            <PostActions
              slug={post.slug}
              title={post.title}
              url={url}
              shareLinks={shareLinks}
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}