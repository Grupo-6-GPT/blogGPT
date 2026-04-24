import UpdatesFeed from '@/components/UpdatesFeed'

export const metadata = { title: 'Robots Bailarines 2.0 — GPT Blog' }

const stack = [
  { layer: 'Frontend', tech: 'React 18 + Vite', rol: 'SPA / PWA' },
  { layer: 'Frontend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Frontend', tech: 'Tailwind CSS + shadcn/ui', rol: 'Estilos y componentes' },
  { layer: 'Frontend', tech: 'Zustand', rol: 'Estado global' },
  { layer: 'Frontend', tech: 'Workbox + vite-plugin-pwa', rol: 'Service worker / offline' },
  { layer: 'Frontend', tech: 'Web Bluetooth API', rol: 'Comunicación directa con ESP32 vía BLE' },
  { layer: 'Backend', tech: 'Node.js + Express', rol: 'API REST + WebSocket' },
  { layer: 'Backend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Backend', tech: 'SQLite', rol: 'Persistencia de coreografías y configuraciones' },
  { layer: 'Embebido', tech: 'ESP32', rol: 'BLE GATT + Wi-Fi, control de servos' },
  { layer: 'Embebido', tech: 'C++ / Arduino', rol: 'Firmware: lectura de sensores, control PWM' },
  { layer: 'Embebido', tech: 'SG90 Servomotores (×4)', rol: 'Articulaciones del robot' },
  { layer: 'DevOps', tech: 'Docker + Compose', rol: 'Contenerización de servicios' },
  { layer: 'DevOps', tech: 'Nginx Proxy Manager', rol: 'Reverse proxy + gestión SSL' },
  { layer: 'DevOps', tech: "Let's Encrypt", rol: 'Certificados HTTPS' },
  { layer: 'DevOps', tech: 'GitHub Actions', rol: 'CI/CD para build y despliegue' },
]

const hardware = [
  { icon: '📡', name: 'ESP32', desc: 'Microcontrolador dual-core con BLE 4.2 GATT + Wi-Fi 802.11 b/g/n. Ejecuta el firmware de control de servos y expone un servidor BLE para la PWA.' },
  { icon: '⚙️', name: 'Servomotor SG90 ×4', desc: 'Servo de 9 g, 180° de rotación. Controlado por señales PWM desde el ESP32. Batería de litio 3.7V integrada.' },
  { icon: '🔌', name: 'Shield / Protoboard', desc: 'Shield de expansión para distribución de alimentación y señales PWM. Wi-Fi + BLE integrado en el ESP32.' },
]

export default function RobotsBailariinesPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-border px-6 pb-14 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_0%_50%,rgba(99,102,241,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-muted">Proyecto 1</span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">🤖 Robots Bailarines 2.0</h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Sistema embebido con ESP32 + BLE GATT y una PWA full-stack para coreografiar robots
            con servomotores SG90 en tiempo real.
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
              <strong className="text-[#e2e6f0]">Robots Bailarines 2.0</strong> es una plataforma
              que permite diseñar y ejecutar coreografías en robots físicos de bajo costo construidos
              sobre módulos ESP32 y servomotores SG90. La interfaz web (PWA) se comunica con cada
              robot a través de <em className="text-[#e2e6f0]">Bluetooth Low Energy (GATT)</em>, sin
              drivers ni aplicaciones nativas.
            </p>
            <p>
              El backend expone una REST API + WebSocket para comunicación en tiempo real. Las
              coreografías se persisten en SQLite y se ejecutan en el ESP32 vía comandos BLE. Todo
              el stack corre en contenedores Docker detrás de Nginx con HTTPS.
            </p>
          </div>
        </section>

        {/* ÚLTIMOS AVANCES */}
        <section>
          <SectionTitle>Últimos Avances</SectionTitle>
          <UpdatesFeed project="robots-bailarines" limit={3} showMoreHref="#avances" />
        </section>

        {/* STACK */}
        <section>
          <SectionTitle>Stack Tecnológico</SectionTitle>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-bg3">
                  <Th>Capa</Th><Th>Tecnología</Th><Th>Rol</Th>
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
          <div className="rounded-xl border border-border bg-bg2 p-6 text-sm space-y-2">

            {/* Capa 1: Frontend */}
            <ArchCard color="indigo" title="Frontend (PWA)" horizontal items={['React 18 + Vite', 'TypeScript · Tailwind CSS', 'Web Bluetooth API', 'Zustand · Workbox · PWA']} />

            <FlowArrow label="HTTP(S) · REST API · WebSocket" />

            {/* Capa 2: Backend + DB en paralelo */}
            <div className="grid grid-cols-2 gap-3">
              <ArchCard color="emerald" title="Backend (API)" items={['Node.js + Express', 'REST API + WebSocket', 'Autenticación y coreografías', 'Telemetría y estado']} />
              <ArchCard color="violet" title="Base de Datos" items={['SQLite', 'Coreografías', 'Configuraciones', 'Historial / Logs']} />
            </div>

            <FlowArrow label="HTTP · WebSocket · Comandos y Telemetría" />

            {/* Capa 3: Hardware */}
            <ArchCard color="amber" title="Hardware — ESP32" horizontal items={['C++ / Arduino · Firmware', 'BLE GATT (servidor)', '4× SG90 Servomotores · PWM', 'Batería 3.7V · Wi-Fi integrado']} />

            {/* Capa 4: DevOps (siempre al fondo) */}
            <div className="mt-4 border-t border-border pt-4">
              <ArchCard color="slate" title="Infraestructura (DevOps)" horizontal items={['Docker + Compose', 'Nginx Proxy Manager', "Let's Encrypt", 'GitHub Actions · CI/CD']} />
            </div>

          </div>
        </section>

        {/* TODOS LOS AVANCES */}
        <section id="avances">
          <SectionTitle>Todos los Avances</SectionTitle>
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

const cardColors: Record<string, string> = {
  indigo: 'border-indigo-500/30 bg-indigo-500/10',
  emerald: 'border-emerald-500/30 bg-emerald-500/10',
  violet: 'border-violet-500/30 bg-violet-500/10',
  amber: 'border-amber-500/30 bg-amber-500/10',
  slate: 'border-slate-500/30 bg-slate-500/10',
}

const titleColors: Record<string, string> = {
  indigo: 'text-indigo-300',
  emerald: 'text-emerald-300',
  violet: 'text-violet-300',
  amber: 'text-amber-300',
  slate: 'text-slate-300',
}

function ArchCard({ color, title, items, horizontal = false }: {
  color: string; title: string; items: string[]; horizontal?: boolean
}) {
  return (
    <div className={`rounded-xl border p-4 ${cardColors[color]}`}>
      <p className={`mb-2 text-xs font-bold ${titleColors[color]}`}>{title}</p>
      <ul className={horizontal ? 'flex flex-wrap gap-x-4 gap-y-1' : 'space-y-1'}>
        {items.map((item) => (
          <li key={item} className="text-xs text-muted">· {item}</li>
        ))}
      </ul>
    </div>
  )
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-2">
      <div className="h-px flex-1 border-t border-dashed border-border" />
      <span className="font-mono text-xs text-border">{label}</span>
      <div className="h-px flex-1 border-t border-dashed border-border" />
    </div>
  )
}
