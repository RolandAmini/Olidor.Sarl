'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { upload } from '@vercel/blob/client'

export default function CreatePostPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return alert('Veuillez sélectionner une image de couverture.')

    setLoading(true)

    try {
      // Upload de l'image sur Vercel Blob
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      })

      // Sauvegarde de l'article dans Neon Postgres via Prisma
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          summary,
          content,
          coverImage: newBlob.url,
        }),
      })

      if (res.ok) {
        router.push('/blog')
        router.refresh()
      } else {
        alert('Erreur lors de la création de l\'article.')
      }
    } catch (err) {
      console.error(err)
      alert('Une erreur est survenue.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Nouvel Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Titre</label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Résumé</label>
          <textarea
            required
            className="w-full p-2 border rounded"
            rows={2}
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image de couverture</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contenu</label>
          <textarea
            required
            className="w-full p-2 border rounded"
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Publication en cours...' : 'Publier l\'article'}
        </button>
      </form>
    </div>
  )
}