import type { Metadata } from "next";
import SignupForm from "@/components/app/signup-form";
import Link from "next/link"



export const metadata: Metadata = {
  title: "Register"
}

export default function Register() {
  return (
    <div className="flex w-full md:w-2/3 flex-col justify-center xxl:justify-start space-y-6">
    <div className="flex flex-col space-y-2 text-start">
      <h1 className="text-4xl font-semibold tracking-tight">
      Welcome to the club
      </h1>
    </div>
    <SignupForm />
    <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
      <Link
     href="/login"
        className="hover:text-violet-500 hover:underline underline-offset-4"
      >
        Already have an account? Sign In
      </Link>
    </p>
   </div>
  );
}
