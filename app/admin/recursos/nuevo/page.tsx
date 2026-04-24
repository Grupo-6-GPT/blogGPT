import ResourceForm from '@/components/ResourceForm'

export const metadata = { title: 'Nuevo recurso — Admin GPT Blog' }

export default function NuevoRecursoPage() {
  return (
    <div className="max-w-2xl">
      <h2 className="mb-6 text-xl font-bold text-white">Nuevo recurso</h2>
      <div className="rounded-xl border border-border bg-bg2 p-7">
        <ResourceForm />
      </div>
    </div>
  )
}
