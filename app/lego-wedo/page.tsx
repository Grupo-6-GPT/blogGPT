import UpdatesFeed from '@/components/UpdatesFeed'

export const metadata = { title: 'PWA LEGO WeDo 2.0 — GPT Blog' }

const stack = [
  { layer: 'Hardware', tech: 'LEGO WeDo 2.0 Hub', rol: 'Concentrador BLE central (GATT periférico)' },
  { layer: 'Hardware', tech: 'Motor WeDo 2.0', rol: 'Actuador de movimiento' },
  { layer: 'Hardware', tech: 'Sensor de movimiento', rol: 'Detección de distancia por IR' },
  { layer: 'Hardware', tech: 'Sensor de inclinación', rol: 'Orientación espacial del hub' },
  { layer: 'Hardware', tech: 'LED RGB (hub)', rol: 'Indicador de estado controlable' },
  { layer: 'Conectividad', tech: 'BLE ~10 m', rol: 'Enlace inalámbrico hub ↔ navegador' },
  { layer: 'Frontend', tech: 'React + Vite', rol: 'SPA / PWA' },
  { layer: 'Frontend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Frontend', tech: 'Tailwind CSS + shadcn/ui', rol: 'Estilos y componentes' },
  { layer: 'Frontend', tech: 'Zustand', rol: 'Estado global' },
  { layer: 'Frontend', tech: 'Workbox + vite-plugin-pwa', rol: 'Service worker / offline' },
  { layer: 'Frontend', tech: 'Web Bluetooth API', rol: 'Comunicación directa con el hub' },
  { layer: 'Backend', tech: 'Node.js + Express', rol: 'API REST' },
  { layer: 'Backend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Backend', tech: 'SQLite', rol: 'Persistencia de sesiones / logs' },
  { layer: 'DevOps', tech: 'Docker + Compose', rol: 'Contenedores' },
  { layer: 'DevOps', tech: 'Nginx Proxy Manager', rol: 'Reverse proxy' },
  { layer: 'DevOps', tech: "Let's Encrypt", rol: 'HTTPS (requerido por Web BT API)' },
  { layer: 'DevOps', tech: 'GitHub Actions', rol: 'CI/CD' },
]

const hardware = [
  { icon: '🧠', name: 'Hub WeDo 2.0', desc: 'Concentrador BLE 4.0 con 2 puertos de E/S y batería integrada. Actúa como dispositivo GATT periférico (rango ~10 m).' },
  { icon: '🔁', name: 'Motor WeDo 2.0', desc: 'Motor DC con encoder. Velocidad y dirección controladas por el hub vía comandos BLE desde la PWA.' },
  { icon: '📏', name: 'Sensor de Movimiento', desc: 'Sensor de distancia por infrarrojos. Devuelve lecturas de proximidad para disparar eventos en la app.' },
  { icon: '📐', name: 'Sensor de Inclinación', desc: 'Detecta orientación (plano, inclinado, arriba/abajo) para acciones contextuales en la PWA.' },
  { icon: '💡', name: 'LED RGB (hub)', desc: 'LED integrado en el hub controlable por BLE. Sirve como indicador visual de estado desde la PWA.' },
]

const budget = [
  { item: 'Hardware LEGO WeDo 2.0', cost: '$0 CLP', freq: 'Proporcionado por el profesor', free: true },
  { item: 'Dominio web', cost: '$1.000 CLP', freq: 'Anual', free: false },
  { item: 'VPS (servidor)', cost: '$5.000 – $7.000 CLP', freq: 'Mensual', free: false },
  { item: "Certificado SSL (Let's Encrypt)", cost: '$0 CLP', freq: 'Gratuito / automático', free: true },
]

export default function LegoWedoPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-border px-6 pb-14 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_0%_50%,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-muted">
            Proyecto 2
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">
            🧱 PWA LEGO WeDo 2.0
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Aplicación web progresiva para controlar el hub LEGO WeDo 2.0 mediante la Web Bluetooth
            API directamente desde el navegador — motores, sensores y LED RGB sin instalar nada.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-14">

        {/* DESCRIPCIÓN */}
        <section>
          <SectionTitle>Descripción</SectionTitle>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              <strong className="text-[#e2e6f0]">PWA LEGO WeDo 2.0</strong> aprovecha la{' '}
              <em className="text-[#e2e6f0]">Web Bluetooth API</em> del navegador para conectarse
              directamente al hub sin software intermedio. Desde la PWA se controlan motores,
              se leen los sensores de movimiento e inclinación, y se cambia el color del LED RGB.
            </p>
            <p>
              La arquitectura sigue el mismo patrón del ramo: frontend React/Vite como PWA, backend
              Express/SQLite, y DevOps en Docker con HTTPS obligatorio (requerido por la Web BT API).
              El hardware fue proporcionado íntegramente por el profesor — costo de componentes: <strong className="text-green-400">$0</strong>.
            </p>
          </div>
        </section>

        {/* STACK */}
        <section>
          <SectionTitle>Stack Tecnológico</SectionTitle>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-bg3">
                  <Th>Capa</Th>
                  <Th>Tecnología</Th>
                  <Th>Rol</Th>
                </tr>
              </thead>
              <tbody>
                {stack.map((row, i) => (
                  <tr key={i} className="border-t border-border transition-colors hover:bg-bg3">
                    <td className="px-4 py-3 text-muted">{row.layer}</td>
                    <td className="px-4 py-3">
                      <code className="rounded-md border border-border bg-bg3 px-2 py-0.5 font-mono text-xs text-amber-300">
                        {row.tech}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-muted">{row.rol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* HARDWARE */}
        <section>
          <SectionTitle>Hardware LEGO WeDo 2.0</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hardware.map((h) => (
              <div key={h.name} className="rounded-xl border border-border bg-bg2 p-5">
                <span className="text-2xl">{h.icon}</span>
                <h4 className="mt-2 font-semibold text-white">{h.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{h.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl border border-border bg-bg2 px-5 py-3 text-sm text-muted">
            Todo el hardware fue proporcionado por el profesor.{' '}
            <strong className="text-green-400">Costo de componentes: $0 CLP.</strong>
          </p>
        </section>

        {/* ARQUITECTURA */}
        <section>
          <SectionTitle>Arquitectura General</SectionTitle>
          <div className="rounded-xl border border-border bg-bg2 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <ArchBox color="amber" label="PWA" sub="React + Vite" />
              <Arrow label="HTTPS ⟷" />
              <ArchBox color="emerald" label="API REST" sub="Express + SQLite" />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <ArchBox color="slate" label="Nginx + Docker" sub="Let's Encrypt" />
              <Arrow label="Web BT / BLE ⟷" />
              <ArchBox color="amber" label="Hub WeDo 2.0" sub="BLE ~10 m" />
              <Arrow label="→" />
              <ArchBox color="rose" label="Motores + Sensores" sub="LED RGB" />
            </div>
          </div>
        </section>

        {/* PRESUPUESTO */}
        <section>
          <SectionTitle>Presupuesto Estimado</SectionTitle>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-bg3">
                  <Th>Ítem</Th>
                  <Th>Costo</Th>
                  <Th>Frecuencia</Th>
                </tr>
              </thead>
              <tbody>
                {budget.map((row, i) => (
                  <tr key={i} className="border-t border-border transition-colors hover:bg-bg3">
                    <td className="px-4 py-3 text-[#e2e6f0]">{row.item}</td>
                    <td
                      className={`px-4 py-3 font-mono font-semibold ${row.free ? 'text-green-400' : 'text-white'}`}
                    >
                      {row.cost}
                    </td>
                    <td className="px-4 py-3 text-muted">{row.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AVANCES */}
        <section>
          <SectionTitle>Avances del Proyecto</SectionTitle>
          <UpdatesFeed project="lego-wedo" />
        </section>

      </div>
    </>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-xl font-bold text-white">
      {children}
      <span className="flex-1 border-t border-border" />
    </h2>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="border-b border-border px-4 py-3 text-left font-mono text-xs font-bold uppercase tracking-widest text-muted">
      {children}
    </th>
  )
}

const archColors: Record<string, string> = {
  indigo: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-200',
  emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200',
  slate: 'border-slate-500/40 bg-slate-500/10 text-slate-200',
  amber: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
  rose: 'border-rose-500/40 bg-rose-500/10 text-rose-200',
}

function ArchBox({ color, label, sub }: { color: string; label: string; sub: string }) {
  return (
    <div className={`min-w-[120px] rounded-lg border px-4 py-3 text-center ${archColors[color]}`}>
      <p className="font-semibold">{label}</p>
      <p className="font-mono text-xs opacity-60">{sub}</p>
    </div>
  )
}

function Arrow({ label }: { label: string }) {
  return <span className="font-mono text-xs text-muted">{label}</span>
}
