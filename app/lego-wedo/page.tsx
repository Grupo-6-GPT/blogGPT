import UpdatesFeed from '@/components/UpdatesFeed'

export const metadata = { title: 'PWA LEGO WeDo 2.0 — GPT Blog' }

const stack = [
  { layer: 'Frontend', tech: 'React 18 + Vite', rol: 'SPA / PWA' },
  { layer: 'Frontend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Frontend', tech: 'Tailwind CSS + shadcn/ui', rol: 'Estilos y componentes' },
  { layer: 'Frontend', tech: 'Zustand', rol: 'Estado global' },
  { layer: 'Frontend', tech: 'Workbox + vite-plugin-pwa', rol: 'Service worker / offline' },
  { layer: 'Frontend', tech: 'Web Bluetooth API', rol: 'Conexión opcional directa al hub LEGO' },
  { layer: 'Backend', tech: 'Node.js + Express', rol: 'API REST + WebSocket (tiempo real)' },
  { layer: 'Backend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Backend', tech: 'SQLite', rol: 'Usuarios, hubs, acciones, configuraciones, logs' },
  { layer: 'Hardware', tech: 'LEGO WeDo 2.0 Hub', rol: 'Concentrador BLE GATT central' },
  { layer: 'Hardware', tech: 'SDK en Python', rol: 'Control de alto nivel, API del robot LEGO, Bluetooth' },
  { layer: 'Hardware', tech: 'Firmware C++ (Arduino)', rol: 'Control de motores, lectura de sensores, comms bajo nivel' },
  { layer: 'Hardware', tech: 'Motor WeDo 2.0', rol: 'Actuador de movimiento con encoder' },
  { layer: 'Hardware', tech: 'Sensor de movimiento', rol: 'Detección de distancia por IR' },
  { layer: 'Hardware', tech: 'Sensor de inclinación', rol: 'Orientación espacial del hub' },
  { layer: 'Hardware', tech: 'LED RGB (hub)', rol: 'Indicador de estado controlable por BLE' },
  { layer: 'DevOps', tech: 'Docker + Compose', rol: 'Contenerización de servicios' },
  { layer: 'DevOps', tech: 'Nginx Proxy Manager', rol: 'Reverse proxy y gestión SSL' },
  { layer: 'DevOps', tech: "Let's Encrypt", rol: 'Certificados HTTPS (requerido por Web BT API)' },
  { layer: 'DevOps', tech: 'GitHub Actions', rol: 'CI/CD para build y despliegue' },
]

const hardware = [
  { icon: '🧠', name: 'Hub WeDo 2.0', desc: 'Concentrador BLE 4.0 GATT con 2 puertos de E/S y batería integrada. Rango ~10 m. Dispositivo periférico del sistema.' },
  { icon: '🐍', name: 'SDK en Python', desc: 'Control de alto nivel del robot: API del hub LEGO, gestión de conexión Bluetooth y envío de comandos estructurados.' },
  { icon: '⚡', name: 'Firmware C++ (Arduino)', desc: 'Capa de bajo nivel: control de motores, lectura de sensores (movimiento/inclinación) y comunicación con el hub.' },
  { icon: '🔁', name: 'Motor WeDo 2.0', desc: 'Motor DC con encoder. Velocidad y dirección controladas desde la PWA vía backend.' },
  { icon: '📏', name: 'Sensor de Movimiento', desc: 'Sensor IR de proximidad. Retorna lecturas para disparar eventos en la aplicación web.' },
  { icon: '💡', name: 'LED RGB (hub)', desc: 'LED integrado en el hub. Color controlable por BLE, sirve como indicador visual de estado.' },
]

export default function LegoWedoPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-border px-6 pb-14 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_0%_50%,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-muted">Proyecto 2</span>
          <h1 className="mt-3 text-4xl font-extrabold text-white">🧱 PWA LEGO WeDo 2.0</h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Aplicación web progresiva para controlar el hub LEGO WeDo 2.0 — motores, sensores
            y LED RGB desde el navegador mediante Web Bluetooth API y backend en tiempo real.
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
              <em className="text-[#e2e6f0]">Web Bluetooth API</em> del navegador para conectarse al
              hub y enviar comandos en tiempo real sin instalar nada. El backend Node.js expone una
              REST API y un canal <em className="text-[#e2e6f0]">WebSocket</em> para telemetría y
              estado del robot.
            </p>
            <p>
              El hardware combina un <em className="text-[#e2e6f0]">SDK en Python</em> para control
              de alto nivel con un <em className="text-[#e2e6f0]">firmware C++ (Arduino)</em> para la
              capa de bajo nivel (motores, sensores). El hardware fue proporcionado íntegramente por
              el profesor.
            </p>
          </div>
        </section>

        {/* ÚLTIMOS AVANCES */}
        <section>
          <SectionTitle>Últimos Avances</SectionTitle>
          <UpdatesFeed project="lego-wedo" limit={3} showMoreHref="#avances" />
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
            Todo el hardware fue proporcionado por el profesor.
          </p>
        </section>

        {/* ARQUITECTURA */}
        <section>
          <SectionTitle>Arquitectura General</SectionTitle>
          <div className="space-y-2 rounded-xl border border-border bg-bg2 p-6 text-sm">

            {/* Capa 1: Frontend */}
            <ArchCard color="amber" title="Frontend (Cliente Web)" horizontal items={[
              'React 18 + Vite · TypeScript',
              'Tailwind CSS · shadcn/ui',
              'Zustand · Workbox · PWA',
              'Web Bluetooth API (opcional)',
            ]} />

            <FlowArrow label="HTTP(S) · REST API · WebSocket (tiempo real)" />

            {/* Capa 2: Backend + DB */}
            <div className="grid grid-cols-2 gap-3">
              <ArchCard color="emerald" title="Backend (API)" items={[
                'Node.js + Express',
                'REST API + WebSocket',
                'Autenticación y usuarios',
                'Gestión hubs / robots',
                'Telemetría y estado',
              ]} />
              <ArchCard color="violet" title="Base de Datos" items={[
                'SQLite',
                'Usuarios',
                'Hubs / Robots',
                'Acciones guardadas',
                'Historial / Logs',
              ]} />
            </div>

            <FlowArrow label="HTTP / WebSocket · Comandos y Telemetría · BLE ~10 m" />

            {/* Capa 3: Hardware (dos subcapas) */}
            <div className="grid grid-cols-2 gap-3">
              <ArchCard color="orange" title="Hardware — SDK Python (alto nivel)" items={[
                'Control del robot LEGO',
                'API Bluetooth',
                'Gestión de conexión',
              ]} />
              <ArchCard color="rose" title="Firmware C++ Arduino (bajo nivel)" items={[
                'Control de motores',
                'Lectura de sensores IR / inclinación',
                'Comunicación BLE GATT',
              ]} />
            </div>

            {/* Capa 4: DevOps */}
            <div className="border-t border-border pt-4">
              <ArchCard color="slate" title="Infraestructura (DevOps)" horizontal items={[
                'Docker + Compose',
                'Nginx Proxy Manager',
                "Let's Encrypt",
                'GitHub Actions · CI/CD',
              ]} />
            </div>

          </div>
        </section>

        {/* TODOS LOS AVANCES */}
        <section id="avances">
          <SectionTitle>Todos los Avances</SectionTitle>
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

const cardColors: Record<string, string> = {
  amber:  'border-amber-500/30 bg-amber-500/10',
  emerald:'border-emerald-500/30 bg-emerald-500/10',
  violet: 'border-violet-500/30 bg-violet-500/10',
  slate:  'border-slate-500/30 bg-slate-500/10',
  orange: 'border-orange-500/30 bg-orange-500/10',
  rose:   'border-rose-500/30 bg-rose-500/10',
}

const titleColors: Record<string, string> = {
  amber:  'text-amber-300',
  emerald:'text-emerald-300',
  violet: 'text-violet-300',
  slate:  'text-slate-300',
  orange: 'text-orange-300',
  rose:   'text-rose-300',
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
