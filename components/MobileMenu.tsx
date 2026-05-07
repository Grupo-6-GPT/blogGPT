'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavLink {
  href: string
  label: string
}

interface Props {
  links: NavLink[]
  isAdmin: boolean
  userEmail: string | null
}

export default function MobileMenu({ links, isAdmin, userEmail }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-bg3 hover:text-white"
        aria-label="Menú"
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-14 z-50 border-b border-border bg-bg shadow-lg">
          <div className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            {isAdmin ? (
              <Link
                href="/admin"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-lg bg-indigo-600/20 px-3 py-2.5 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-600/30"
              >
                Admin
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-lg border border-border px-3 py-2.5 text-sm text-muted transition-colors hover:bg-bg3 hover:text-white"
              >
                Iniciar sesión
              </Link>
            )}
            {userEmail && (
              <p className="mt-2 px-3 pb-1 font-mono text-xs text-muted">{userEmail}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
