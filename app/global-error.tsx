'use client'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
    });
  }
  return (
    <html lang="en" >
      <body className="m-0">
        <Header />
        <div className='text-center min-h-100'>
          <h2>Something went wrong, please try again later.</h2>
          <button
            onClick={reload}
            className="border-0 px-6 py-2 rounded-2xl bg-kent-purple text-white font-semibold cursor-pointer"
          >
            Try Again
          </button>      
           </div>
        <Footer />
      </body>
    </html>
  )
}