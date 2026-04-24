export const metadata = { title: 'Recursos — GPT Blog' }

const recursos = [
  {
    icon: '📊',
    title: 'Planilla de Gestión del JP',
    desc: 'Google Sheets con el seguimiento del plan de trabajo, hitos, asignación de tareas y estado de avance del proyecto integrador.',
    href: 'https://docs.google.com/spreadsheets/d/1Yy8xccUUqiKn3xHuqlgnvvHlDJqvmWNx91e1tyMLAHs/edit?usp=sharing',
    label: 'Abrir planilla',
    color: 'border-green-500/40 hover:border-green-500/70',
    bar: 'bg-green-500',
    labelColor: 'text-green-400',
    badge: 'Google Sheets',
    badgeStyle: 'bg-green-500/10 text-green-400',
  },
  {
    icon: '📋',
    title: 'Trello — Robots Bailarines 2.0',
    desc: 'Tablero Kanban del proyecto Robots Bailarines 2.0 con las tareas del sprint, backlog y estado de cada ítem de desarrollo.',
    href: 'https://trello.com/b/8ntwH00X/robots-bailarines-gpt',
    label: 'Abrir Trello',
    color: 'border-blue-500/40 hover:border-blue-500/70',
    bar: 'bg-blue-500',
    labelColor: 'text-blue-400',
    badge: 'Trello',
    badgeStyle: 'bg-blue-500/10 text-blue-400',
  },
]

export default function RecursosPage() {
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
        <div className="grid gap-6 sm:grid-cols-2">
          {recursos.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl border bg-bg2 p-7 transition-all ${r.color}`}
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 ${r.bar}`} />
              <div className="mb-3 flex items-start justify-between">
                <span className="text-3xl">{r.icon}</span>
                <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${r.badgeStyle}`}>
                  {r.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.desc}</p>
              <span
                className={`mt-5 inline-block text-sm font-semibold transition-colors group-hover:underline ${r.labelColor}`}
              >
                {r.label} ↗
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-border p-6 text-center text-sm text-muted">
          <p>
            ¿Faltan recursos?{' '}
            <span className="text-[#e2e6f0]">
              El admin puede agregar nuevos links editando esta página.
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
