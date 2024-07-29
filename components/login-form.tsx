// LoginForm.js
'use client'

import { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import { IconSpinner } from './ui/icons';
import { getMessageFromCode } from '@/lib/utils';
import { auth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from '../utils/firebase'; // Adjust path as needed

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pending, setPending] = useState(false);

  // useEffect(() => {
  //   if (result) {
  //     if (result.type === 'error') {
  //       toast.error(getMessageFromCode(result.resultCode));
  //     } else {
  //       toast.success(getMessageFromCode(result.resultCode));
  //       router.refresh();
  //     }
  //   }
  // }, [result, router]);

  const handleEmailLogin = async (event: any) => {
    event.preventDefault();
    setPending(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully');
      router.push('/'); // Adjust the path to your logged-in page
    } catch (error) {
      toast.error("error");
    } finally {
      setPending(false);
    }
  };

  const handleGoogleLogin = async () => {
    setPending(true);
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success('Logged in with Google');
      router.push('/'); // Adjust the path to your logged-in page
    } catch (error) {
      toast.error("error");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleEmailLogin} className="flex flex-col items-center gap-4 space-y-3">
      <div className="w-full flex-1 rounded-lg border bg-white px-6 pb-4 pt-8 shadow-md md:w-96 dark:bg-zinc-950">
        <h1 className="mb-3 text-2xl font-bold">Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-zinc-400" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-zinc-400" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border bg-zinc-50 px-2 py-[9px] text-sm outline-none placeholder:text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <LoginButton pending={pending}/>
        <button type="button" onClick={handleGoogleLogin} disabled={pending}>
          {pending ? <IconSpinner /> : 'Log in with Google'}
        </button>
      </div>

      <Link href="/signup" className="flex flex-row gap-1 text-sm text-zinc-400">
        No account yet? <div className="font-semibold underline">Sign up</div>
      </Link>
    </form>
  );
}

function LoginButton({ pending }: { pending: any }) {
  return (
    <button
      className="my-4 flex h-10 w-full flex-row items-center justify-center rounded-md bg-zinc-900 p-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      aria-disabled={pending}
    >
      {pending ? <IconSpinner /> : 'Log in'}
    </button>
  );
}