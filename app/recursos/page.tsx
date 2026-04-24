import { createClient } from '@/lib/supabase/server'
import type { Resource } from '@/lib/types'

export const metadata = { title: 'Recursos — GPT Blog' }

export default async function RecursosPage() {
  const supabase = await createClient()
  const { data: recursos } = await supabase
    .from('resources')
    .select('*')
    .order('created_at', { ascending: true })

  const items = (recursos ?? []) as Resource[]

  return (
    <>
      <div className="border-b border-border px-6 pb-14 pt-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-extrabold text-white">🗂 Recursos</h1>
          <p className="mt-3 text-base text-muted">
            Accesos directos a las herramientas de gestión y seguimiento del proyecto.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14">
        {items.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm italic text-muted">
            Aún no hay recursos publicados. El admin puede agregarlos desde el panel.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-border bg-bg2 p-7 transition-all hover:border-[#353a4f] hover:shadow-lg hover:shadow-black/20"
              >
                <div className="mb-3 flex items-start justify-between">
                  <span className="text-3xl">{r.icon}</span>
                  {r.badge && (
                    <span className="rounded-md bg-bg3 px-2 py-0.5 text-xs font-semibold text-muted">
                      {r.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
                {r.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>
                )}
                <span className="mt-5 inline-block text-sm font-semibold text-indigo-400 transition-colors group-hover:text-indigo-300 group-hover:underline">
                  Abrir ↗
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
