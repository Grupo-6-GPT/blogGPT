'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { Resource } from '@/lib/types'

interface Props {
  resource?: Resource
}

export default function ResourceForm({ resource }: Props) {
  const router = useRouter()
  const supabase = createClient()
  const isEdit = !!resource

  const [title, setTitle] = useState(resource?.title ?? '')
  const [description, setDescription] = useState(resource?.description ?? '')
  const [url, setUrl] = useState(resource?.url ?? '')
  const [icon, setIcon] = useState(resource?.icon ?? '🔗')
  const [badge, setBadge] = useState(resource?.badge ?? '')
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const payload = {
      title: title.trim(),
      description: description.trim() || null,
      url: url.trim(),
      icon: icon.trim() || '🔗',
      badge: badge.trim() || null,
    }

    const { error } = isEdit
      ? await supabase.from('resources').update(payload).eq('id', resource!.id)
      : await supabase.from('resources').insert(payload)

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/admin/recursos')
    router.refresh()
  }

  const handleDelete = async () => {
    if (!confirm('¿Eliminar este recurso?')) return
    setDeleting(true)
    await supabase.from('resources').delete().eq('id', resource!.id)
    router.push('/admin/recursos')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Título */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">Título</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Planilla de Gestión"
            className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none placeholder:text-muted focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* URL */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">URL</label>
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://..."
            className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none placeholder:text-muted focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Icono */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">
            Ícono <span className="text-xs text-muted">(emoji)</span>
          </label>
          <input
            type="text"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            placeholder="🔗"
            className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none placeholder:text-muted focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Badge */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">
            Badge <span className="text-xs text-muted">(opcional, ej: Trello)</span>
          </label>
          <input
            type="text"
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
            placeholder="Google Sheets"
            className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none placeholder:text-muted focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Descripción */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-sm font-medium text-[#e2e6f0]">
            Descripción <span className="text-xs text-muted">(opcional)</span>
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Breve descripción del recurso..."
            className="w-full rounded-lg border border-border bg-bg3 px-4 py-2.5 text-sm text-[#e2e6f0] outline-none placeholder:text-muted focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
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
            {loading ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Crear recurso'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/recursos')}
            className="rounded-lg border border-border px-6 py-2.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
          >
            Cancelar
          </button>
        </div>
        {isEdit && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="rounded-lg border border-red-500/30 px-4 py-2.5 text-sm text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-60"
          >
            {deleting ? 'Eliminando...' : 'Eliminar'}
          </button>
        )}
      </div>
    </form>
  )
}
