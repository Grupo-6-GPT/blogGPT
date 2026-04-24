import { createClient } from '@/lib/supabase/server'
import NewPostForm from '@/components/NewPostForm'

export const metadata = { title: 'Nuevo avance — GPT Blog' }

export default async function NuevoPostPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="max-w-2xl">
      <h2 className="mb-6 text-xl font-bold text-white">Publicar nuevo avance</h2>
      <div className="rounded-xl border border-border bg-bg2 p-7">
        <NewPostForm authorId={user!.id} />
      </div>
    </div>
  )
}
