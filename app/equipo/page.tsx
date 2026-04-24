export const metadata = { title: 'Equipo — GPT Blog' }

const team = [
  {
    name: 'Jorge Migueles',
    github: 'BerserkerD81',
    role: 'Integrante del equipo',
  },
  {
    name: 'Cristóbal Herrera',
    github: 'tobaalhs',
    role: 'Integrante del equipo',
  },
  {
    name: 'Jonathan Falcón',
    github: 'jotaefe373',
    role: 'Integrante del equipo',
  },
  {
    name: 'Kevin Gallardo',
    github: 'KevGaA',
    role: 'Integrante del equipo',
  },
]

export default function EquipoPage() {
  return (
    <>
      <div className="border-b border-border px-6 pb-14 pt-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-extrabold text-white">👥 Equipo</h1>
          <p className="mt-3 max-w-lg text-base text-muted">
            Gestión de Proyectos Tecnológicos · Universidad de Talca · 2026
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <a
              key={member.github}
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-xl border border-border bg-bg2 p-6 text-center transition-all hover:border-[#353a4f] hover:shadow-lg hover:shadow-black/20"
            >
              {/* GitHub avatar */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github.com/${member.github}.png?size=200`}
                alt={member.name}
                className="h-20 w-20 rounded-full border-2 border-border object-cover transition-transform group-hover:scale-105"
              />
              <h3 className="mt-4 font-semibold text-white">{member.name}</h3>
              <p className="mt-0.5 text-xs text-muted">{member.role}</p>
              <span className="mt-3 font-mono text-xs text-indigo-400 transition-colors group-hover:text-indigo-300">
                @{member.github}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
