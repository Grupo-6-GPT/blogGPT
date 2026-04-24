import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import ResourceForm from '@/components/ResourceForm'

export const metadata = { title: 'Editar recurso — Admin GPT Blog' }

export default async function EditarRecursoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: resource } = await supabase.from('resources').select('*').eq('id', id).single()

  if (!resource) notFound()

  return (
    <div className="max-w-2xl">
      <h2 className="mb-6 text-xl font-bold text-white">Editar recurso</h2>
      <div className="rounded-xl border border-border bg-bg2 p-7">
        <ResourceForm resource={resource} />
      </div>
    </div>
  )
}
