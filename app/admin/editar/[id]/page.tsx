import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import EditPostForm from '@/components/EditPostForm'

export const metadata = { title: 'Editar avance — GPT Blog' }

export default async function EditarPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: post } = await supabase.from('posts').select('*').eq('id', id).single()

  if (!post) notFound()

  return (
    <div className="max-w-2xl">
      <h2 className="mb-6 text-xl font-bold text-white">Editar avance</h2>
      <div className="rounded-xl border border-border bg-bg2 p-7">
        <EditPostForm post={post} />
      </div>
    </div>
  )
}
