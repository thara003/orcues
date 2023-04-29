"use client";

import { Database } from "@/lib/database.types";
import { useState, useEffect } from "react";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import {
  TextInput,
  Title,
  Subtitle,
  SelectBox,
  SelectBoxItem,
  Button,
} from "@tremor/react";
import Lottie from "lottie-react";
import dogAnimation from "public/gifs/dogAnimation.json";

export default function UserForm() {
  const [tab, setTab] = useState(0);
  const [fullname, setFullname] = useState("");
  const [newfullname, setNewFullname] = useState("");
  const [username, setUsername] = useState("");
  const [newusername, setNewUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const { supabase } = useSupabase();
  const router = useRouter();
  const style = {
    height: 200,
  };
  const [isEdit, setIsEdit] = useState(false);

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
    setNewFullname(profiles[0].full_name);
    setNewUsername(profiles[0].username);
    if (!user) {
      toast.error("Could not fetch user details");
    }
  };

  const updateProfile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("profiles")
      .update({
        full_name: newfullname,
        username: newusername,
        email: user.email,
      })
      .eq("id", user.id);

    setIsEdit(false);
    toast.success("Your profile has been updated");
  };
  const cancelUpdateProfile = () => {
    setIsEdit(false);
    setNewFullname(fullname);
    setNewUsername(username);
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
      {!loading && (
        <div className="mt-8 flex h-96 w-3/4 flex-row items-center rounded-lg border border-slate-300 bg-white shadow-sm">
          <aside className="flex h-full w-1/4 flex-col border-r border-r-slate-300 p-4">
            <span
              className={`cursor-pointer rounded-md py-2 px-4 text-black ${
                tab === 0 && "bg-slate-100"
              } hover:font-semibold`}
              onClick={() => {
                setTab(0);
              }}
            >
              Personal
            </span>
            <span
              className={`cursor-pointer rounded-md py-2 px-4 text-black ${
                tab === 1 && "bg-slate-100"
              } hover:font-semibold`}
              onClick={() => {
                setTab(1);
              }}
            >
              Change Password
            </span>
            <span
              className={`cursor-pointer rounded-md py-2 px-4 text-black ${
                tab === 2 && "bg-slate-100"
              } hover:font-semibold`}
              onClick={() => {
                setTab(2);
              }}
            >
              Mail Server
            </span>
          </aside>
          <main className="flex h-full w-3/4 flex-col p-4">
            {tab === 0 && (
              <div>
                <Title>Profile settings</Title>
                <div className="my-6 flex flex-row items-center">
                  <Subtitle className="w-1/3">Username</Subtitle>
                  <TextInput
                    placeholder="Enter your username"
                    type="text"
                    value={newusername}
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                      setIsEdit(true);
                    }}
                  />
                </div>
                <div className="mb-4 flex flex-row items-center">
                  <Subtitle className="w-1/3">Full name</Subtitle>
                  <TextInput
                    placeholder="Enter your full name"
                    type="text"
                    value={newfullname}
                    onChange={(e) => {
                      setNewFullname(e.target.value);
                      setIsEdit(true);
                    }}
                  />
                </div>
                <div className="flex flex-row items-center justify-end gap-2">
                  <Button
                    size="xs"
                    variant="secondary"
                    disabled={!isEdit}
                    className="mt-4 w-24 rounded-md border-red-400 px-4 py-2 text-center text-red-400 hover:bg-red-100"
                    onClick={cancelUpdateProfile}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="xs"
                    variant="secondary"
                    disabled={!isEdit}
                    className="mt-4 w-24 rounded-md border-indigo-400 px-4 py-2 text-center text-indigo-400 hover:bg-indigo-100"
                    onClick={updateProfile}
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}
            {tab === 1 && (
              <div>
                <Title>Change password</Title>
                <TextInput
                  placeholder="Enter your old password"
                  type="password"
                />
                <TextInput
                  placeholder="Enter your new password"
                  type="password"
                />
              </div>
            )}
            {tab === 2 && (
              <div>
                <Title>Mail server config</Title>
                <SelectBox
                  onValueChange={(value) =>
                    console.log("the new value is", value)
                  }
                  defaultValue="1"
                >
                  <SelectBoxItem value="1" text="Kilometers" />
                  <SelectBoxItem value="2" text="Meters" />
                  <SelectBoxItem value="3" text="Miles" />
                  <SelectBoxItem value="4" text="Nautical Miles" />
                </SelectBox>
              </div>
            )}
            {/* <button
              className="mt-4 w-24 rounded-md bg-black px-4 py-2 text-center text-white hover:bg-black/75"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </button> */}
            {/* <label
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
            /> */}

            {/* <TextInput
              placeholder="Enter your username"
              disabled={!isEdit}
              type="text"
              defaultValue={username}
              value={username}
            /> */}

            {/* <button
              className="mt-4 w-24 rounded-md bg-black px-4 py-2 text-center text-white hover:bg-black/75"
              onClick={updateProfile}
            >
              Save
            </button> */}
          </main>
        </div>
      )}
    </div>
  );
}
