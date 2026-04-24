'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { Post, ProjectSlug } from '@/lib/types'
import { PROJECT_LABELS } from '@/lib/types'

export default function EditPostForm({ post }: { post: Post }) {
  const router = useRouter()
  const supabase = createClient()
  const [project, setProject] = useState<ProjectSlug>(post.project)
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase
      .from('posts')
      .update({ project, title: title.trim(), content: content.trim() })
      .eq('id', post.id)

    if (error) {
      setError('Error al guardar. Intenta de nuevo.')
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  const handleDelete = async () => {
    if (!confirm('¿Eliminar este avance? Esta acción no se puede deshacer.')) return
    setDeleting(true)

    await supabase.from('posts').delete().eq('id', post.id)

    router.push('/admin')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Proyecto */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[#e2e6f0]">Proyecto</label>
        <div className="flex gap-3">
          {(['robots-bailarines', 'lego-wedo'] as ProjectSlug[]).map((slug) => (
            <button
              key={slug}
              type="button"
              onClick={() => setProject(slug)}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                project === slug
                  ? slug === 'robots-bailarines'
                    ? 'border-indigo-500 bg-indigo-500/15 text-indigo-300'
                    : 'border-amber-500 bg-amber-500/15 text-amber-300'
                  : 'border-border bg-bg3 text-muted hover:border-[#353a4f]'
              }`}
            >
              {PROJECT_LABELS[slug]}
            </button>
          ))}
        </div>
      </div>

      {/* Título */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">Título</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* Contenido */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">Contenido</label>
        <textarea
          required
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:opacity-60"
          >
            {loading ? 'Guardando...' : 'Guardar cambios'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin')}
            className="rounded-lg border border-border px-6 py-2.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
          >
            Cancelar
          </button>
        </div>
        <button
          type="button"
          onClick={handleDelete}
          disabled={deleting}
          className="rounded-lg border border-red-500/30 px-4 py-2.5 text-sm text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-60"
        >
          {deleting ? 'Eliminando...' : 'Eliminar'}
        </button>
      </div>
    </form>
  )
}
