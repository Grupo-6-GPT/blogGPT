import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { Resource } from '@/lib/types'

export const metadata = { title: 'Recursos — Admin GPT Blog' }

export default async function AdminRecursosPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('resources')
    .select('*')
    .order('created_at', { ascending: true })

  const recursos = (data ?? []) as Resource[]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Recursos</h2>
        <Link
          href="/admin/recursos/nuevo"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
        >
          + Nuevo recurso
        </Link>
      </div>

      {recursos.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border p-6 text-sm italic text-muted">
          Sin recursos aún.
        </p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-bg3">
                {['Ícono', 'Título', 'Badge', 'URL', 'Acciones'].map((h) => (
                  <th
                    key={h}
                    className="border-b border-border px-4 py-3 text-left font-mono text-xs font-bold uppercase tracking-widest text-muted"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recursos.map((r) => (
                <tr key={r.id} className="border-t border-border hover:bg-bg3">
                  <td className="px-4 py-3 text-xl">{r.icon}</td>
                  <td className="px-4 py-3 text-[#e2e6f0]">{r.title}</td>
                  <td className="px-4 py-3 text-muted">{r.badge ?? '—'}</td>
                  <td className="max-w-[200px] truncate px-4 py-3 font-mono text-xs text-muted">
                    {r.url}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/recursos/editar/${r.id}`}
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
    </div>
  )
}
