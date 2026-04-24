import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { ProjectSlug } from '@/lib/types'
import PostCard from './PostCard'

interface Props {
  project?: ProjectSlug
  limit?: number
  showProject?: boolean
  showMoreHref?: string
}

export default async function UpdatesFeed({
  project,
  limit = 20,
  showProject = false,
  showMoreHref,
}: Props) {
  const supabase = await createClient()

  let query = supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (project) query = query.eq('project', project)

  const { data: posts, error } = await query

  if (error) {
    return (
      <p className="rounded-xl border border-border bg-bg2 p-6 text-sm text-muted">
        No se pudieron cargar los avances.
      </p>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border p-6 text-sm italic text-border">
        Aún no hay avances publicados para este proyecto.
      </p>
    )
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} showProject={showProject} />
        ))}
      </div>
      {showMoreHref && (
        <div className="text-right">
          <Link
            href={showMoreHref}
            className="text-sm font-medium text-muted transition-colors hover:text-white"
          >
            Ver todos los avances ↓
          </Link>
        </div>
      )}
    </div>
  )
}
