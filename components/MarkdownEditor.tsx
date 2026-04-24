'use client'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
  value: string
  onChange: (v: string) => void
  rows?: number
  placeholder?: string
}

export default function MarkdownEditor({ value, onChange, rows = 10, placeholder }: Props) {
  const [tab, setTab] = useState<'write' | 'preview'>('write')

  return (
    <div className="overflow-hidden rounded-lg border border-border focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
      {/* Tabs */}
      <div className="flex border-b border-border bg-bg3">
        {(['write', 'preview'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
              tab === t
                ? 'border-b-2 border-indigo-500 text-white'
                : 'text-muted hover:text-white'
            }`}
          >
            {t === 'write' ? 'Escribir' : 'Vista previa'}
          </button>
        ))}
        <span className="ml-auto flex items-center pr-3 font-mono text-xs text-border">
          Markdown
        </span>
      </div>

      {/* Write */}
      {tab === 'write' && (
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-bg3 px-4 py-3 text-sm text-[#e2e6f0] outline-none placeholder:text-muted"
        />
      )}

      {/* Preview */}
      {tab === 'preview' && (
        <div className="min-h-[120px] bg-bg3 px-4 py-3">
          {value.trim() ? (
            <div className="prose-blog">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-sm italic text-border">Nada que previsualizar aún.</p>
          )}
        </div>
      )}
    </div>
  )
}
