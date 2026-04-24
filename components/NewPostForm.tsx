'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { ProjectSlug } from '@/lib/types'
import { PROJECT_LABELS } from '@/lib/types'
import MarkdownEditor from './MarkdownEditor'

export default function NewPostForm({ authorId }: { authorId: string }) {
  const router = useRouter()
  const supabase = createClient()
  const fileRef = useRef<HTMLInputElement>(null)

  const [project, setProject] = useState<ProjectSlug>('robots-bailarines')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setImageFile(file)
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    } else {
      setImagePreview(null)
    }
  }

  const uploadImage = async (file: File): Promise<{ url: string | null; error: string | null }> => {
    const ext = file.name.split('.').pop()
    const path = `${authorId}/${Date.now()}.${ext}`
    const { error } = await supabase.storage.from('post-images').upload(path, file)
    if (error) return { url: null, error: error.message }
    const { data } = supabase.storage.from('post-images').getPublicUrl(path)
    return { url: data.publicUrl, error: null }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    let image_url: string | null = null
    if (imageFile) {
      const { url, error: uploadError } = await uploadImage(imageFile)
      if (!url) {
        setError(`Error al subir imagen: ${uploadError}`)
        setLoading(false)
        return
      }
      image_url = url
    }

    const { error } = await supabase.from('posts').insert({
      project,
      title: title.trim(),
      content: content.trim(),
      image_url,
      author_id: authorId,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

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
          placeholder="Ej: Implementación del firmware BLE en ESP32"
          className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none placeholder:text-muted focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* Contenido */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">Contenido</label>
        <MarkdownEditor
          value={content}
          onChange={setContent}
          placeholder="Describe el avance... Soporta **markdown**, `código`, listas, etc."
        />
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
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full rounded-lg border border-dashed border-border bg-bg3 px-4 py-3 text-sm text-muted transition-colors hover:border-[#353a4f] hover:text-white"
        >
          {imageFile ? imageFile.name : '+ Seleccionar imagen'}
        </button>
        {imagePreview && (
          <div className="relative mt-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imagePreview}
              alt="preview"
              className="h-40 w-full rounded-lg object-cover"
            />
            <button
              type="button"
              onClick={() => { setImageFile(null); setImagePreview(null) }}
              className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-xs text-white hover:bg-black/80"
            >
              Quitar
            </button>
          </div>
        )}
      </div>

      {error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Publicando...' : 'Publicar avance'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin')}
          className="rounded-lg border border-border px-6 py-2.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}
