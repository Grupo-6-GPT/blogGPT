'use client'
import { useRouter } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/client'

export default function NavAuthButton({ user }: { user: User | null }) {
  const router = useRouter()
  const supabase = createClient()

  if (!user) return null

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="ml-1 rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
    >
      Salir
    </button>
  )
}
