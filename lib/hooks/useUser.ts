import { useSupabase } from "@/app/supabase-provider";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export const useUser = () => {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        // @ts-ignore
        setUser(user);
      } catch (error) {
        console.error("Error retrieving user:", error.message);
        setUser(null);
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });

    console.log("inside useUser", user);

    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};
