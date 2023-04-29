"use client";

import { Database } from "@/lib/database.types";
import { useState, useEffect } from "react";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function UserInfo () {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const { supabase } = useSupabase();
  const router = useRouter();

    useEffect(() => {
        getProfile();
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
      <button className="bg-black text-center px-4 py-2 hover:bg-black/75 text-white rounded-md" onClick={handleLogout}>Logout</button>
    </div>
  );
};

