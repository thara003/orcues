"use client";

import { Database } from "@/lib/database.types";
import { useState, useEffect } from "react";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import Lottie from "lottie-react";
import dogAnimation from "public/gifs/dogAnimation.json";

export default function UserForm() {
  const [content, setContent] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const { supabase } = useSupabase();
  const router = useRouter();
  const style = {
    height: 200,
  };

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    let { data: profiles, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id);
    setLoading(false);
    setFullname(profiles[0].full_name);
    setUsername(profiles[0].username);
    if (!user) {
      toast.error("Could not fetch user details");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.push("/login");
  };

  return (
    <div className="flex h-full items-center">
      <Toaster position="bottom-right" />
      {loading && (
        <Lottie animationData={dogAnimation} loop={true} style={style} />
      )}
      {/* <span>{fullname}</span>
      <span>{username}</span>
      <button
        className="rounded-md bg-black px-4 py-2 text-center text-white hover:bg-black/75"
        onClick={handleLogout}
      >
        Logout
      </button> */}
      <div className="mt-8 flex h-96 w-3/4 flex-row items-center rounded-lg border border-slate-300">
        <aside className="flex h-full w-1/4 flex-col border-r border-r-slate-300 p-4">
          <span>Personal</span>
          <span>Change Password</span>
          <span>Mail Server</span>
        </aside>
        <main className="flex h-full w-3/4 flex-col p-4">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-2 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
            placeholder="Enter your username"
            required
          />
          <label
            htmlFor="fullname"
            className="text-sm font-medium text-gray-700"
          >
            Fullname
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-2 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
            placeholder="Enter your fullname"
            required
          />
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
          />
        </main>
      </div>
    </div>
  );
}
