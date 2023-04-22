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
        <Toaster position="top-right" />
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-2 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
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
          className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-2 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="flex items-center justify-start text-sm">
        <a
          href="#"
          className="font-medium hover:underline hover:underline-offset-2"
        >
          Forgot your password?
        </a>
      </div>
      <div>
        <button
          type="submit"
          onClick={handleLogin}
          className="flex w-full flex-row items-center justify-center rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-center text-base font-medium text-white shadow-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
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
