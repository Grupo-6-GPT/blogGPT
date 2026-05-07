import UpdatesFeed from '@/components/UpdatesFeed'

export const metadata = { title: 'Panel LED Scrolleable — GPT Blog' }

const stack = [
  { layer: 'Frontend', tech: 'React + Vite', rol: 'Web App para enviar mensajes' },
  { layer: 'Frontend', tech: 'TypeScript', rol: 'Tipado estático' },
  { layer: 'Frontend', tech: 'Tailwind CSS', rol: 'Estilos' },
  { layer: 'Backend', tech: 'Node.js + Express', rol: 'API REST para guardar y entregar mensajes' },
  { layer: 'Backend', tech: 'SQLite / PostgreSQL', rol: 'Persistencia de mensajes' },
  { layer: 'Firmware', tech: 'C++ / Arduino (ESP32)', rol: 'Consulta backend y muestra texto en panel' },
  { layer: 'Hardware', tech: 'ESP32 WROOM-32', rol: 'Microcontrolador con WiFi' },
  { layer: 'Hardware', tech: 'Módulo MAX7219 (4× 8×8)', rol: 'Panel LED en cascada' },
  { layer: 'Hardware', tech: 'Fuente 5V 2A', rol: 'Alimentación del panel' },
]

const hardware = [
  { icon: '⚡', name: 'ESP32 WROOM-32', desc: 'Microcontrolador con WiFi y Bluetooth integrado. Se conecta al backend vía HTTP para pedir el mensaje actual y lo muestra en el panel.' },
  { icon: '💡', name: 'Módulo MAX7219', desc: '4 matrices LED 8×8 en cascada controladas por SPI. El driver MAX7219 simplifica el control de cada LED con un solo chip.' },
  { icon: '🔌', name: 'Fuente 5V 2A', desc: 'Alimentación dedicada para el panel LED. El ESP32 se alimenta por USB desde la misma fuente.' },
  { icon: '🪵', name: 'Carcasa MDF', desc: 'Soporte en madera MDF para montar el panel y el ESP32 de forma ordenada y presentable.' },
]


export default function PanelLedPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden border-b border-border px-6 pb-14 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_0%_50%,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[.15em] text-muted">Proyecto 3</span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-xs font-bold text-emerald-400">
              En planificación
            </span>
          </div>
          <h1 className="mt-3 text-4xl font-extrabold text-white">📟 Panel LED Scrolleable</h1>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Panel LED con texto scrolleable controlado desde una Web App. El usuario escribe un mensaje
            en el navegador, el backend lo guarda y el ESP32 lo consulta por WiFi para mostrarlo en
            el panel MAX7219.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-16 px-6 py-14">

        {/* DESCRIPCIÓN */}
        <section>
          <SectionTitle>Descripción</SectionTitle>
          <div className="space-y-3 text-sm leading-relaxed text-muted">
            <p>
              <strong className="text-[#e2e6f0]">Panel LED Scrolleable</strong> es un sistema IoT
              compuesto por tres partes: una <em className="text-[#e2e6f0]">Web App</em> donde el
              usuario escribe el mensaje, un <em className="text-[#e2e6f0]">backend REST</em> que lo
              persiste en base de datos, y un <em className="text-[#e2e6f0]">ESP32</em> que consulta el
              backend por WiFi y muestra el texto con scroll en el panel LED MAX7219.
            </p>
            <p>
              El proyecto está actualmente en fase de <em className="text-[#e2e6f0]">planificación</em>.
              Se trabaja con una metodología híbrida Scrum/Kanban con sprints semanales y reuniones de
              seguimiento cada semana.
            </p>
          </div>
        </section>

        {/* ÚLTIMOS AVANCES */}
        <section>
          <SectionTitle>Últimos Avances</SectionTitle>
          <UpdatesFeed project="panel-led" limit={3} showMoreHref="#avances" />
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
                      <code className="rounded-md border border-border bg-bg3 px-2 py-0.5 font-mono text-xs text-emerald-300">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hardware.map((h) => (
              <div key={h.name} className="rounded-xl border border-border bg-bg2 p-5">
                <span className="text-2xl">{h.icon}</span>
                <h4 className="mt-2 font-semibold text-white">{h.name}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">{h.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-xl border border-border bg-bg2 px-5 py-3 text-sm text-muted">
            Presupuesto total estimado: <strong className="text-[#e2e6f0]">$15.400 CLP</strong> en hardware. Hosting y software son gratuitos.
          </p>
        </section>

        {/* ARQUITECTURA */}
        <section>
          <SectionTitle>Arquitectura General</SectionTitle>
          <div className="space-y-2 rounded-xl border border-border bg-bg2 p-6 text-sm">

            <ArchCard color="emerald" title="Frontend (Web App)" horizontal items={[
              'React + Vite · TypeScript',
              'Tailwind CSS',
              'Formulario para escribir mensajes',
              'Lista de mensajes guardados',
            ]} />

            <FlowArrow label="HTTP · REST API" />

            <div className="grid grid-cols-2 gap-3">
              <ArchCard color="violet" title="Backend (API REST)" items={[
                'Node.js + Express',
                'Endpoints: POST /mensaje · GET /mensaje',
                'Validación y persistencia',
              ]} />
              <ArchCard color="slate" title="Base de Datos" items={[
                'SQLite / PostgreSQL',
                'Tabla de mensajes',
                'Historial de textos enviados',
              ]} />
            </div>

            <FlowArrow label="HTTP polling (WiFi 2.4 GHz)" />

            <div className="grid grid-cols-2 gap-3">
              <ArchCard color="teal" title="Firmware (ESP32)" items={[
                'C++ / Arduino',
                'Consulta backend cada N segundos',
                'Envía texto al panel por SPI',
                'Reintento automático si pierde WiFi',
              ]} />
              <ArchCard color="green" title="Hardware (Panel LED)" items={[
                'MAX7219 · 4× matriz 8×8',
                'Scroll configurable',
                'Brillo ajustable',
                'Fuente 5V 2A',
              ]} />
            </div>

          </div>
        </section>

        {/* TODOS LOS AVANCES */}
        <section id="avances">
          <SectionTitle>Todos los Avances</SectionTitle>
          <UpdatesFeed project="panel-led" />
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
  emerald: 'border-emerald-500/30 bg-emerald-500/10',
  violet:  'border-violet-500/30 bg-violet-500/10',
  slate:   'border-slate-500/30 bg-slate-500/10',
  teal:    'border-teal-500/30 bg-teal-500/10',
  green:   'border-green-500/30 bg-green-500/10',
}

const titleColors: Record<string, string> = {
  emerald: 'text-emerald-300',
  violet:  'text-violet-300',
  slate:   'text-slate-300',
  teal:    'text-teal-300',
  green:   'text-green-300',
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
