import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import NavAuthButton from './NavAuthButton'
import MobileMenu from './MobileMenu'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/robots-bailarines', label: 'Robots Bailarines' },
  { href: '/lego-wedo', label: 'LEGO WeDo' },
  { href: '/panel-led', label: 'Panel LED' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/equipo', label: 'Equipo' },
]

export default async function Nav() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-bold tracking-widest text-white">
          GPT Blog
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link
                href="/admin"
                className="ml-2 rounded-lg bg-indigo-600/20 px-3 py-1.5 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-600/30"
              >
                Admin
              </Link>
              <NavAuthButton user={user} />
            </>
          ) : (
            <Link
              href="/login"
              className="ml-2 rounded-lg border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
            >
              Iniciar sesión
            </Link>
          )}
        </div>

        {/* Mobile */}
        <MobileMenu
          links={links}
          isAdmin={!!user}
          userEmail={user?.email ?? null}
        />
      </div>
    </nav>
  )
}
