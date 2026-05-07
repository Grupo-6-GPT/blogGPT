import Link from 'next/link'
import type { Post } from '@/lib/types'
import { PROJECT_LABELS } from '@/lib/types'

const projectStyles = {
  'robots-bailarines': {
    badge: 'bg-indigo-500/10 text-indigo-400',
    dot: 'bg-indigo-500',
    cta: 'text-indigo-400 group-hover:text-indigo-300',
  },
  'lego-wedo': {
    badge: 'bg-amber-500/10 text-amber-400',
    dot: 'bg-amber-500',
    cta: 'text-amber-400 group-hover:text-amber-300',
  },
  'panel-led': {
    badge: 'bg-emerald-500/10 text-emerald-400',
    dot: 'bg-emerald-500',
    cta: 'text-emerald-400 group-hover:text-emerald-300',
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface Props {
  post: Post
  showProject?: boolean
}

export default function PostCard({ post, showProject = false }: Props) {
  const style = projectStyles[post.project]

  return (
    <Link
      href={`/posts/${post.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg2 transition-all hover:border-[#353a4f] hover:shadow-lg hover:shadow-black/20"
    >
      {/* Thumbnail */}
      {post.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image_url}
          alt={post.title}
          className="h-44 w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        {showProject && (
          <span
            className={`mb-2 inline-block w-fit rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-widest ${style.badge}`}
          >
            {PROJECT_LABELS[post.project]}
          </span>
        )}

        <h3 className="font-semibold leading-snug text-white group-hover:underline">
          {post.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {post.content}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
            <span className="font-mono text-xs text-muted">{formatDate(post.created_at)}</span>
          </div>
          <span className={`text-xs font-semibold transition-colors ${style.cta}`}>
            Leer más →
          </span>
        </div>
      </div>
    </Link>
  )
}
