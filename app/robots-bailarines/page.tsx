import UpdatesFeed from '@/components/UpdatesFeed'

export const metadata = { title: 'Robots Bailarines 2.0 — GPT Blog' }

const stack = [
  { layer: 'Embebido', tech: 'C++ / Arduino', rol: 'Firmware en ESP32' },
  { layer: 'Embebido', tech: 'ESP32', rol: 'BLE 4.2 + Wi-Fi, control de servos' },
  { layer: 'Embebido', tech: 'SG90 Servomotores', rol: 'Articulaciones del robot' },
  { layer: 'Frontend', tech: 'React + Vite', rol: 'SPA / PWA' },
  { layer: 'Frontend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Frontend', tech: 'Tailwind CSS + shadcn/ui', rol: 'Estilos y componentes' },
  { layer: 'Frontend', tech: 'Zustand', rol: 'Estado global' },
  { layer: 'Frontend', tech: 'Workbox + vite-plugin-pwa', rol: 'Service worker / offline' },
  { layer: 'Backend', tech: 'Node.js + Express', rol: 'API REST' },
  { layer: 'Backend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Backend', tech: 'SQLite', rol: 'Persistencia de coreografías' },
  { layer: 'DevOps', tech: 'Docker + Compose', rol: 'Contenedores' },
  { layer: 'DevOps', tech: 'Nginx Proxy Manager', rol: 'Reverse proxy' },
  { layer: 'DevOps', tech: "Let's Encrypt", rol: 'Certificado HTTPS' },
  { layer: 'DevOps', tech: 'GitHub Actions', rol: 'CI/CD' },
]

const hardware = [
  { icon: '📡', name: 'ESP32', desc: 'Microcontrolador dual-core con BLE 4.2 + Wi-Fi 802.11 b/g/n. Ejecuta el firmware de control de servos y la capa BLE.' },
  { icon: '⚙️', name: 'Servomotor SG90', desc: 'Servo de 9 g, 180° de rotación. Bajo costo y torque suficiente para articulaciones del robot de baile.' },
  { icon: '🔌', name: 'Shield / Protoboard', desc: 'Shield de expansión para distribución de alimentación y señales PWM hacia los servos.' },
]

const budget = [
  { item: 'ESP32 (módulo)', cost: '$3.882 CLP', freq: 'Por unidad' },
  { item: 'Dominio web', cost: '$1.050 CLP', freq: 'Anual' },
  { item: 'VPS (servidor)', cost: '$5.000 – $7.000 CLP', freq: 'Mensual' },
  { item: 'Shield de expansión', cost: '$3.500 CLP', freq: 'Por unidad' },
  { item: 'Protoboard', cost: '$2.500 CLP', freq: 'Por unidad' },
  { item: 'Cables Dupont / jumper', cost: '$2.000 CLP', freq: 'Por set' },
]

export default function RobotsBailariinesPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-border px-6 pb-14 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_0%_50%,rgba(99,102,241,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-muted">
            Proyecto 1
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">
            🤖 Robots Bailarines 2.0
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Sistema embebido con ESP32 + servomotores SG90 controlado vía BLE desde una PWA
            full-stack. Diseña y ejecuta coreografías en robots físicos en tiempo real.
          </p>
          <a
            href="https://trello.com/b/8ntwH00X/robots-bailarines-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-500/20"
          >
            Ver Trello del proyecto ↗
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-14">

        {/* DESCRIPCIÓN */}
        <section>
          <SectionTitle>Descripción</SectionTitle>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              <strong className="text-[#e2e6f0]">Robots Bailarines 2.0</strong> es una plataforma que
              permite diseñar y ejecutar coreografías en robots físicos de bajo costo construidos sobre
              módulos ESP32 y servomotores SG90. La interfaz web (PWA) se comunica con cada robot a
              través de <em className="text-[#e2e6f0]">Bluetooth Low Energy</em>, sin drivers ni apps nativas.
            </p>
            <p>
              El sistema expone una REST API con backend Node.js/Express que persiste las coreografías en
              SQLite, las sirve a la PWA y, a través del ESP32, ejecuta los movimientos. Todo el stack
              corre en contenedores Docker detrás de Nginx con HTTPS (requerido por la Web Bluetooth API).
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
                      <code className="rounded-md border border-border bg-bg3 px-2 py-0.5 font-mono text-xs text-indigo-300">
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
          <SectionTitle>Hardware</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {hardware.map((h) => (
              <div key={h.name} className="rounded-xl border border-border bg-bg2 p-5">
                <span className="text-2xl">{h.icon}</span>
                <h4 className="mt-2 font-semibold text-white">{h.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARQUITECTURA */}
        <section>
          <SectionTitle>Arquitectura General</SectionTitle>
          <div className="rounded-xl border border-border bg-bg2 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <ArchBox color="indigo" label="PWA" sub="React + Vite" />
              <Arrow label="HTTPS ⟷" />
              <ArchBox color="emerald" label="API REST" sub="Express + SQLite" />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-4">
              <ArchBox color="slate" label="Nginx + Docker" sub="Let's Encrypt" />
              <Arrow label="BLE ⟷" />
              <ArchBox color="amber" label="ESP32" sub="C++ / Arduino" />
              <Arrow label="PWM →" />
              <ArchBox color="rose" label="SG90 ×N" sub="Servomotores" />
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
                    <td className="px-4 py-3 font-mono font-semibold text-white">{row.cost}</td>
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
          <UpdatesFeed project="robots-bailarines" />
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
    <div
      className={`min-w-[120px] rounded-lg border px-4 py-3 text-center ${archColors[color]}`}
    >
      <p className="font-semibold">{label}</p>
      <p className="font-mono text-xs opacity-60">{sub}</p>
    </div>
  )
}

function Arrow({ label }: { label: string }) {
  return <span className="font-mono text-xs text-muted">{label}</span>
}
