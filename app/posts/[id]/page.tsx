import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { createClient } from '@/lib/supabase/server'
import { PROJECT_LABELS } from '@/lib/types'
import type { Post } from '@/lib/types'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from('posts').select('title').eq('id', id).single()
  return { title: post ? `${post.title} — GPT Blog` : 'Post — GPT Blog' }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const projectStyles = {
  'robots-bailarines': {
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    back: 'hover:text-indigo-400',
    dot: 'bg-indigo-500',
  },
  'lego-wedo': {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    back: 'hover:text-amber-400',
    dot: 'bg-amber-500',
  },
  'panel-led': {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    back: 'hover:text-emerald-400',
    dot: 'bg-emerald-500',
  },
}

const projectHref: Record<string, string> = {
  'robots-bailarines': '/robots-bailarines',
  'lego-wedo': '/lego-wedo',
  'panel-led': '/panel-led',
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from('posts').select('*').eq('id', id).single()

  if (!post) notFound()

  const p = post as Post
  const style = projectStyles[p.project]

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">

      <Link
        href={projectHref[p.project]}
        className={`mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors ${style.back}`}
      >
        ← Volver a {PROJECT_LABELS[p.project]}
      </Link>

      {p.image_url && (
        <div className="mb-8 overflow-hidden rounded-xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image_url} alt={p.title} className="w-full object-cover" style={{ maxHeight: '420px' }} />
        </div>
      )}

      <div className="mb-8">
        <span className={`inline-block rounded-md border px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest ${style.badge}`}>
          {PROJECT_LABELS[p.project]}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          {p.title}
        </h1>
        <div className="mt-3 flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          <span className="font-mono text-sm text-muted">{formatDate(p.created_at)}</span>
        </div>
      </div>

      <div className="mb-8 border-t border-border" />

      <div className="prose-blog">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {p.content}
        </ReactMarkdown>
      </div>

    </div>
  )
}
