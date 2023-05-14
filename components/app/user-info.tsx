"use client";

import { Database } from "@/lib/database.types";
import { useState, useEffect } from "react";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const { supabase } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setContent(JSON.stringify(user, null, 2));
    if (!user) throw new Error("No user");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.push("/login");
  };

  return (
    <div>
      <p>Welcome User</p>
      <pre>{content}</pre>
      <button
        className="rounded-md bg-black px-4 py-2 text-center text-white hover:bg-black/75"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
