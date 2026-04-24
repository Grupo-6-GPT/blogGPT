import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { PROJECT_LABELS } from '@/lib/types'
import type { Post } from '@/lib/types'

export const metadata = { title: 'Admin — GPT Blog' }

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  const robots = (posts ?? []).filter((p: Post) => p.project === 'robots-bailarines')
  const lego = (posts ?? []).filter((p: Post) => p.project === 'lego-wedo')

  return (
    <div className="space-y-10">
      <Link
        href="/admin/nuevo-post"
        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
      >
        + Nuevo avance
      </Link>

      {(
        [
          { label: PROJECT_LABELS['robots-bailarines'], items: robots, color: 'text-indigo-400' },
          { label: PROJECT_LABELS['lego-wedo'], items: lego, color: 'text-amber-400' },
        ] as { label: string; items: Post[]; color: string }[]
      ).map(({ label, items, color }) => (
        <section key={label}>
          <h2 className={`mb-4 font-mono text-xs font-bold uppercase tracking-widest ${color}`}>
            {label} — {items.length} publicación{items.length !== 1 ? 'es' : ''}
          </h2>
          {items.length === 0 ? (
            <p className="rounded-xl border border-dashed border-border p-5 text-sm italic text-muted">
              Sin publicaciones aún.
            </p>
          ) : (
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-bg3">
                    <Th>Título</Th>
                    <Th>Fecha</Th>
                    <Th>Acciones</Th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((post) => (
                    <tr key={post.id} className="border-t border-border hover:bg-bg3">
                      <td className="px-4 py-3 text-[#e2e6f0]">{post.title}</td>
                      <td className="px-4 py-3 font-mono text-xs text-muted">
                        {formatDate(post.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/editar/${post.id}`}
                          className="text-xs text-indigo-400 hover:underline"
                        >
                          Editar
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border-b border-border px-4 py-3 text-left font-mono text-xs font-bold uppercase tracking-widest text-muted">
      {children}
    </th>
  )
}
