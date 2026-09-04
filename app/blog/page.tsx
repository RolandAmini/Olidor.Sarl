import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const revalidate = 0

function initials(title: string) {
  return title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="relative min-h-screen text-[#1E293B] bg-slate-900">
      {/* 1. Image de fond principale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/olilo.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex-1 w-full">
          {/* Titre & En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Notre Blog & Actualités
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Découvrez nos derniers articles et actualités d&apos;Olidor SARL.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20 bg-white/90 backdrop-blur rounded-2xl shadow-xl">
              <p className="text-gray-600 font-medium">
                Aucun article publié pour le moment.
              </p>
            </div>
          ) : (
            /* Grille d'articles */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/95 backdrop-blur rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Cadre d'image adaptatif (Supporte tout type de ratio) */}
                  <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden">
                    {post.coverImage ? (
                      <>
                        {/* 1. Arrière-plan flouté pour remplir les bordures sans rogner */}
                        <Image
                          src={post.coverImage}
                          alt=""
                          fill
                          className="object-cover blur-md scale-110 opacity-40"
                        />
                        {/* 2. Image principale centrée, entière et non déformée */}
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-contain relative z-10 transition-transform duration-300 hover:scale-105"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400 font-semibold text-xl">
                          {initials(post.title)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <h2 className="text-[15px] font-semibold text-[#1F2937] leading-snug mb-4 line-clamp-2">
                      {post.title}
                    </h2>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#38B2AC] hover:text-[#2C7A7B] text-sm font-medium transition-colors inline-block"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}