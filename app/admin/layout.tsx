import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
            Panel Admin
          </p>
          <h1 className="mt-1 text-2xl font-extrabold text-white">Gestión del Blog</h1>
          <p className="mt-0.5 text-sm text-muted">{user.email}</p>
        </div>
      </div>
      {children}
    </div>
  )
}
