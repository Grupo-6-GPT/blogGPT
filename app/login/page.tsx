import LoginForm from '@/components/LoginForm'

export const metadata = { title: 'Ingresar — GPT Blog' }

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-120px)] items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-white">Panel Admin</h1>
          <p className="mt-2 text-sm text-muted">Ingresa para publicar avances en los proyectos.</p>
        </div>
        <div className="rounded-xl border border-border bg-bg2 p-7">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
