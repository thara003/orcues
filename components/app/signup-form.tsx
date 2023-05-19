"use client";

import { useSupabase } from "../../app/supabase-provider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { Loader2 } from "lucide-react";
import { absoluteUrl } from "@/lib/utils";

export default function SignupForm() {
  const { supabase } = useSupabase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name,
        },
        emailRedirectTo: absoluteUrl("/dashboard"),
      },
    });

    if (error) {
      setLoading(false);
      toast.error("Error signing up!");
    } else {
      toast.success("Check your email for the login link!");
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-5">
      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm ring-transparent focus:border-2 focus:border-zinc-500 focus:outline-none focus:ring-zinc-800 sm:text-sm"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
        Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="block w-full rounded-md border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm ring-transparent focus:border-2 focus:border-zinc-500 focus:outline-none focus:ring-zinc-800 sm:text-sm"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="grid gap-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="block w-full rounded-md border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm ring-transparent focus:border-2 focus:border-zinc-500 focus:outline-none focus:ring-zinc-800 sm:text-sm"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="text-brand-600 focus:ring-brand-500 h-4 w-4 rounded border-gray-300"
          />
          <label
            htmlFor="remember_me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleSignUp}
          className="flex w-full flex-row items-center justify-center rounded-md bg-black px-4 py-2 text-center text-base font-medium text-zinc-50 shadow-md transition delay-150 duration-300 ease-in-out hover:bg-black/75"
        >
          {loading && (
            <Loader2 className="mr-2 flex h-4 w-4 animate-spin items-center justify-center" />
          )}
          Sign Up
        </button>
      </div>
    </div>
  );
}
