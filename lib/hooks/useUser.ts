import { useSupabase } from "@/app/supabase-provider";
import { useEffect, useState } from "react";

type User = {
  name: string;
  id: string;
};

export const useUser = () => {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return setUser(null);
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};
