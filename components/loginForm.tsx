"use client";

import router from "next/router";
import { useSupabase } from "../app/supabase-provider";
import { useState } from "react";

export default function LoginForm() {
  const { supabase } = useSupabase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
  };

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//   };

  return (
    <div>
      <div className="grid gap-2">
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
            className="focus:ring-brand-500 focus:border-brand-500 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
            placeholder="
                    Enter your email"
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
            className="focus:ring-brand-500 focus:border-brand-500 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
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
          <div className="text-sm">
            <a
              href="#"
              className="text-brand-600 hover:text-brand-500 font-medium"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleLogin}
            className="bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
