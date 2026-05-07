import Link from 'next/link'
import UpdatesFeed from '@/components/UpdatesFeed'

const projects = [
  {
    href: '/robots-bailarines',
    slug: 'robots-bailarines' as const,
    icon: '🤖',
    title: 'Robots Bailarines 2.0',
    desc: 'Sistema embebido con ESP32 + BLE y una PWA full-stack para coreografiar robots con servomotores SG90 en tiempo real.',
    tags: ['ESP32', 'BLE', 'React', 'TypeScript', 'Docker'],
    accent: 'border-indigo-500/60 hover:border-indigo-500',
    bar: 'bg-indigo-500',
    tagStyle: 'text-indigo-400',
    trello: {
      href: 'https://trello.com/b/8ntwH00X/robots-bailarines-gpt',
      label: 'Ver Trello',
    },
  },
  {
    href: '/lego-wedo',
    slug: 'lego-wedo' as const,
    icon: '🧱',
    title: 'PWA LEGO WeDo 2.0',
    desc: 'PWA para controlar el hub LEGO WeDo 2.0 vía Web Bluetooth API — motores, sensores y LED RGB desde el navegador.',
    tags: ['LEGO WeDo', 'Web BT', 'PWA', 'Vite', 'Tailwind'],
    accent: 'border-amber-500/60 hover:border-amber-500',
    bar: 'bg-amber-500',
    tagStyle: 'text-amber-400',
    trello: null,
  },
  {
    href: '/panel-led',
    slug: 'panel-led' as const,
    icon: '📟',
    title: 'Panel LED Scrolleable',
    desc: 'Panel LED con texto scrolleable controlado desde una Web App — backend REST + ESP32 con módulo MAX7219 y WiFi.',
    tags: ['ESP32', 'MAX7219', 'React', 'Node.js', 'Arduino'],
    accent: 'border-emerald-500/60 hover:border-emerald-500',
    bar: 'bg-emerald-500',
    tagStyle: 'text-emerald-400',
    trello: null,
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)]" />
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[.2em] text-indigo-400">
          Gestión de Proyectos Tecnológicos · 2026
        </p>
        <h1 className="mx-auto text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Hub de Proyectos
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
          Seguimiento de avances, especificaciones técnicas y documentación de los proyectos del ramo.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2 text-sm">
          <span className="text-xs text-muted">Equipo:</span>
          {['Jorge Migueles', 'Cristóbal Herrera', 'Jonathan Falcón', 'Kevin Gallardo'].map(
            (name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-bg3 px-3 py-1 text-xs"
              >
                {name}
              </span>
            ),
          )}
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
          Proyectos
          <span className="flex-1 border-t border-border" />
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.href}
              className={`group relative overflow-hidden rounded-xl border bg-bg2 transition-all ${p.accent}`}
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 ${p.bar}`} />
              <div className="p-7">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-bg3 px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <Link
                    href={p.href}
                    className={`text-sm font-semibold transition-colors ${p.tagStyle} group-hover:underline`}
                  >
                    Ver proyecto →
                  </Link>
                  {p.trello && (
                    <a
                      href={p.trello.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted transition-colors hover:text-white"
                    >
                      {p.trello.label} ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT UPDATES */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
          Últimas Actualizaciones
          <span className="flex-1 border-t border-border" />
        </h2>
        <UpdatesFeed limit={6} showProject />
      </section>

      {/* SHARED STACK */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
          Stack Compartido
          <span className="flex-1 border-t border-border" />
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              layer: 'Frontend',
              items: ['React + Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Workbox + PWA'],
            },
            {
              layer: 'Backend',
              items: ['Node.js + Express', 'TypeScript', 'SQLite', 'REST API'],
            },
            {
              layer: 'DevOps',
              items: ['Docker + Compose', 'Nginx Proxy Manager', "Let's Encrypt", 'GitHub Actions'],
            },
            {
              layer: 'Embebido / HW',
              items: [
                'C++ / Arduino (Robots)',
                'ESP32 BLE + Wi-Fi (Robots)',
                'SG90 Servomotores (Robots)',
                'LEGO WeDo 2.0 Hub (WeDo)',
                'BLE ~10 m (WeDo)',
              ],
            },
          ].map((block) => (
            <div key={block.layer} className="rounded-xl border border-border bg-bg2 p-5">
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
                {block.layer}
              </p>
              <ul className="space-y-1.5">
                {block.items.map((item) => (
                  <li key={item} className="text-sm text-[#e2e6f0]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
