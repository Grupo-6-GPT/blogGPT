import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

const adminNav = [
  { href: '/admin', label: 'Posts' },
  { href: '/admin/recursos', label: 'Recursos' },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-6">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
          Panel Admin
        </p>
        <div className="mt-1 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-white">Gestión del Blog</h1>
          <span className="text-sm text-muted">{user.email}</span>
        </div>
      </div>

      {/* Admin tabs */}
      <div className="mb-8 flex gap-1 border-b border-border">
        {adminNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-t-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-bg3 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {children}
    </div>
  )
}
