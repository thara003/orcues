"use client";

import { useSupabase } from "../../app/supabase-provider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setLoading(false);
      toast.error(error.message);
    } else {
      setLoading(false);
      toast.success("Logged in successfully!");
      router.push("/dashboard");
    }
  };

  return (
    <div className="grid gap-5">
      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 ring-transparent shadow-sm focus:border-2 focus:border-zinc-500 focus:outline-none focus:ring-zinc-800 sm:text-sm"
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
          className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm ring-transparent focus:border-2 focus:border-zinc-500 focus:outline-none focus:ring-zinc-800 sm:text-sm"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="flex items-center justify-start text-sm">
        <a
          href="#"
          className="hover:underline text-zinc-500 hover:text-zinc-700 hover:underline-offset-2"
        >
          Forgot your password?
        </a>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleLogin}
          className="flex w-full flex-row items-center justify-center rounded-md bg-black px-4 py-2 text-center text-base font-medium text-zinc-50 shadow-md transition delay-150 duration-300 ease-in-out hover:bg-black/75"
        >
          {loading && (
            <Loader2 className="mr-2 flex h-4 w-4 animate-spin items-center justify-center" />
          )}
          Sign in
        </button>
      </div>
    </div>
  );
}
