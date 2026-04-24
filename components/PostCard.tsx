import type { Post } from '@/lib/types'
import { PROJECT_LABELS } from '@/lib/types'

const projectStyles = {
  'robots-bailarines': {
    badge: 'bg-indigo-500/10 text-indigo-400',
    dot: 'bg-indigo-500',
  },
  'lego-wedo': {
    badge: 'bg-amber-500/10 text-amber-400',
    dot: 'bg-amber-500',
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
    <div className="relative rounded-xl border border-border bg-bg2 p-5 transition-colors hover:border-[#353a4f]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {showProject && (
            <span
              className={`mb-2 inline-block rounded-md px-2 py-0.5 text-xs font-semibold uppercase tracking-widest ${style.badge}`}
            >
              {PROJECT_LABELS[post.project]}
            </span>
          )}
          <h3 className="font-semibold text-white">{post.title}</h3>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-muted">
            {post.content}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
        <span className="font-mono text-xs text-muted">{formatDate(post.created_at)}</span>
      </div>
    </div>
  )
}
