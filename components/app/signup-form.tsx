"use client";

import { useSupabase } from "../../app/supabase-provider";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignupForm() {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
      <div className="grid gap-5">
        <div className="grid gap-1">
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
            className="focus:ring-violet-500 focus:border-2 focus:border-violet-500 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="focus:ring-violet-500 focus:border-2 focus:border-violet-500 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
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
            className="bg-gradient-to-r  from-violet-600 to-indigo-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 w-full rounded-md px-4 py-2 mt-4 text-base text-center font-medium text-white shadow-md"
          >
            Sign Up
          </button>
        </div>
      </div>
  );
}
