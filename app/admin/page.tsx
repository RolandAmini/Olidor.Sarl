'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  id: string
  title: string
  summary: string
  content: string
  slug: string
  coverImage?: string
  createdAt: string
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts')
      const data = await res.json()
      setPosts(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async (id: string) => {
    if (!confirm('Voulez-vous supprimer cet article ?')) return

    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id))
      } else {
        alert('Erreur lors de la suppression.')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingPost) return

    setIsUpdating(true)
    try {
      const res = await fetch(`/api/posts/${editingPost.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: editingPost.title,
          summary: editingPost.summary,
          content: editingPost.content,
        }),
      })

      if (res.ok) {
        setEditingPost(null)
        fetchPosts()
      } else {
        alert('Erreur lors de la modification.')
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestion des Articles</h1>
        <Link
          href="/admin/blog/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          + Écrire un article
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500">Chargement des articles...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-500">Aucun article disponible pour le moment.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border rounded-lg overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-gray-100">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      Pas d&apos;image
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.summary}</p>
                </div>
              </div>

              <div className="p-4 border-t flex items-center justify-between gap-2">
                <button
                  onClick={() => setEditingPost(post)}
                  className="w-full py-1.5 bg-amber-100 text-amber-800 rounded text-xs font-medium hover:bg-amber-200"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="w-full py-1.5 bg-red-100 text-red-700 rounded text-xs font-medium hover:bg-red-200"
                >
                  Supprimer
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Modal d'édition */}
      {editingPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-xl w-full">
            <h2 className="text-xl font-bold mb-4">Modifier l&apos;article</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Titre</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Résumé</label>
                <textarea
                  required
                  rows={2}
                  className="w-full p-2 border rounded"
                  value={editingPost.summary}
                  onChange={(e) => setEditingPost({ ...editingPost, summary: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contenu</label>
                <textarea
                  required
                  rows={6}
                  className="w-full p-2 border rounded"
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingPost(null)}
                  className="px-4 py-2 border rounded text-sm"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-4 py-2 bg-blue-600 text-white rounded text-sm disabled:opacity-50"
                >
                  {isUpdating ? 'Enregistrement...' : 'Mettre à jour'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}