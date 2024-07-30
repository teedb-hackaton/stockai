import {getSession}  from '@/auth'
import LoginForm from '@/components/login-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = (await getSession()) as Session

  if (session) {
    redirect('/login')
  }

  return (
    <main className="flex flex-col p-4">
      <LoginForm />
    </main>
  )
}
