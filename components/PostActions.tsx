'use client'

import { useEffect, useRef, useState } from 'react'

interface ShareLink {
  label: string
  href: string
}

interface PostActionsProps {
  slug: string
  title: string
  url: string
  shareLinks: ShareLink[]
  initialLikes?: number
}

export default function PostActions({
  slug,
  title,
  url,
  shareLinks,
  initialLikes = 0,
}: PostActionsProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(initialLikes)
  const [shareOpen, setShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareRef = useRef<HTMLDivElement>(null)

  // Charge l'état "liké" et le compteur depuis le navigateur au montage
  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked:${slug}`) === '1'
    const storedLikes = localStorage.getItem(`likes:${slug}`)
    setLiked(storedLiked)
    setLikes(storedLikes ? parseInt(storedLikes, 10) : initialLikes)
  }, [slug, initialLikes])

  // Ferme le menu de partage si on clique en dehors
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (shareRef.current && !shareRef.current.contains(e.target as Node)) {
        setShareOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function toggleLike() {
    const nextLiked = !liked
    const nextLikes = likes + (nextLiked ? 1 : -1)
    setLiked(nextLiked)
    setLikes(nextLikes)
    localStorage.setItem(`liked:${slug}`, nextLiked ? '1' : '0')
    localStorage.setItem(`likes:${slug}`, String(nextLikes))
  }

  async function handleShareClick() {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        // l'utilisateur a annulé le partage natif, on ouvre le menu de secours
      }
    }
    setShareOpen((v) => !v)
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // presse-papiers indisponible, on ignore silencieusement
    }
  }

  return (
    <div className="flex items-center gap-4 sm:gap-5">
      {/* Bouton clap / like */}
      <button
        type="button"
        onClick={toggleLike}
        aria-pressed={liked}
        className={`inline-flex items-center gap-1.5 transition-colors ${
          liked ? 'text-[#242424]' : 'text-green-700 hover:text-blue-600'
        }`}
      >
        <svg
          className="w-[18px] h-[18px]"
          viewBox="0 0 24 24"
          fill={liked ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={1.7}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 11V7a2 2 0 1 1 4 0v3m0-3.5V5a2 2 0 1 1 4 0v4.5m0-2V7a2 2 0 1 1 4 0v6c0 3.5-2 8-7 8s-6.5-3-7.5-5L3.6 13a1.6 1.6 0 0 1 2.6-1.8L7 12"
          />
        </svg>
        <span className="text-sm">{likes}</span>
      </button>

      {/* Bouton partage + menu de secours */}
      <div className="relative" ref={shareRef}>
        <button
          type="button"
          onClick={handleShareClick}
          aria-label="Partager cet article"
          className="inline-flex items-center text-green-700 hover:text-blue-600 transition-colors"
        >
          <svg
            className="w-[18px] h-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0-12 4 4m-4-4-4 4M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"
            />
          </svg>
        </button>

        {shareOpen && (
          <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-[#F2F2F2] bg-white shadow-lg py-1 z-50 text-sm">
            {shareLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-[#242424] hover:bg-[#F7F7F7] transition-colors"
              >
                {s.label}
              </a>
            ))}
            <button
              type="button"
              onClick={copyLink}
              className="w-full text-left px-4 py-2 text-[#242424] hover:bg-[#F7F7F7] transition-colors"
            >
              {copied ? 'Lien copié ✓' : 'Copier le lien'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}