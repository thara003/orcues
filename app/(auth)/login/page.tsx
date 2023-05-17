import type { Metadata } from "next";
import LoginForm from "@/components/app/login-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {

  return (
    <div className="xxl:justify-start flex w-full flex-col justify-center space-y-6 md:w-2/3">
      <div className="flex flex-col space-y-2 text-start">
        <h1 className="text-4xl font-semibold tracking-tight">Welcome back</h1>
      </div>
      <LoginForm />
      <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <Link
          href="/register"
          className="underline-offset-4 hover:text-violet-500 hover:underline"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </p>
    </div>
  );
}
