import type { Metadata } from "next";
import SignupForm from "@/components/signupForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center overscroll-none">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              Welcome to the club
            </h1>
          </div>
          <SignupForm />
          <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
            <Link
              href="/login"
              className="underline-offset-4 hover:text-violet-500 hover:underline"
            >
              Already have an account? Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
