import type { Metadata } from "next";
import SignupForm from "@/components/app/signup-form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <div className="xxl:justify-start flex w-full flex-col justify-center space-y-8 md:w-2/3">
      <div className="flex flex-col space-y-2 text-start">
        <h1 className="text-4xl font-semibold tracking-tight">Create an account</h1>
      </div>
      <SignupForm />
      <p className="px-8 text-center text-sm text-zinc-500">
        <Link
          href="/login"
          className="underline-offset-4 hover:text-zinc-700 hover:underline"
        >
          Already have an account? Sign In
        </Link>
      </p>
    </div>
  );
}
