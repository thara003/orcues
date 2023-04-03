import type { Metadata } from "next";
import LoginForm from "@/components/loginForm";
import Link from "next/link"



export const metadata: Metadata = {
  title: "Login"
}

export default function Login() {
  return (
      <div className="flex h-screen w-screen flex-col items-center justify-center overscroll-none">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome back
          </h1>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/register"
            className="hover:text-violet-500 hover:underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
      </div>
  );
}
