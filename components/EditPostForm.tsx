'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { Post, ProjectSlug } from '@/lib/types'
import { PROJECT_LABELS } from '@/lib/types'
import MarkdownEditor from './MarkdownEditor'

export default function EditPostForm({ post }: { post: Post }) {
  const router = useRouter()
  const supabase = createClient()
  const fileRef = useRef<HTMLInputElement>(null)

  const [project, setProject] = useState<ProjectSlug>(post.project)
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(post.image_url ?? null)
  const [removeImage, setRemoveImage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setImageFile(file)
    setRemoveImage(false)
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreview(null)
    setRemoveImage(true)
  }

  const uploadImage = async (file: File, authorId: string): Promise<string | null> => {
    const ext = file.name.split('.').pop()
    const path = `${authorId}/${Date.now()}.${ext}`
    const { error } = await supabase.storage.from('post-images').upload(path, file)
    if (error) return null
    const { data } = supabase.storage.from('post-images').getPublicUrl(path)
    return data.publicUrl
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    let image_url: string | null = post.image_url ?? null

    if (removeImage) {
      image_url = null
    } else if (imageFile) {
      const authorId = post.author_id ?? 'unknown'
      const url = await uploadImage(imageFile, authorId)
      if (!url) {
        setError('No se pudo subir la imagen. Verifica el bucket "post-images" en Supabase Storage.')
        setLoading(false)
        return
      }
      image_url = url
    }

    const { error } = await supabase
      .from('posts')
      .update({ project, title: title.trim(), content: content.trim(), image_url })
      .eq('id', post.id)

    if (error) {
      setError(error.message)
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
          {(['robots-bailarines', 'lego-wedo', 'panel-led'] as ProjectSlug[]).map((slug) => (
            <button
              key={slug}
              type="button"
              onClick={() => setProject(slug)}
              className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                project === slug
                  ? slug === 'robots-bailarines'
                    ? 'border-indigo-500 bg-indigo-500/15 text-indigo-300'
                    : slug === 'lego-wedo'
                    ? 'border-amber-500 bg-amber-500/15 text-amber-300'
                    : 'border-emerald-500 bg-emerald-500/15 text-emerald-300'
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
        <MarkdownEditor value={content} onChange={setContent} />
      </div>

      {/* Imagen */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">
          Imagen <span className="text-xs text-muted">(opcional)</span>
        </label>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        {imagePreview ? (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePreview}
              alt="preview"
              className="h-40 w-full rounded-lg object-cover"
            />
            <div className="absolute right-2 top-2 flex gap-2">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="rounded-md bg-black/60 px-2 py-0.5 text-xs text-white hover:bg-black/80"
              >
                Cambiar
              </button>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="rounded-md bg-red-900/70 px-2 py-0.5 text-xs text-red-300 hover:bg-red-900"
              >
                Quitar
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="w-full rounded-lg border border-dashed border-border bg-bg3 px-4 py-3 text-sm text-muted transition-colors hover:border-[#353a4f] hover:text-white"
          >
            {imageFile ? imageFile.name : '+ Seleccionar imagen'}
          </button>
        )}
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
