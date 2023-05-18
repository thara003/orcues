"use client";

import { Database } from "@/lib/database.types";
import { Fragment, useState, useEffect } from "react";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { Dialog, Transition } from "@headlessui/react";
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
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const { supabase } = useSupabase();
  const router = useRouter();
  const style = {
    height: 200,
  };
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfile = async () => {
    setLoading(true);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    let { data: profiles, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.id);
    setLoading(false);
    setFullname(profiles[0].full_name);
    setNewFullname(profiles[0].full_name);
  setEmail(user.email);
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
      })
      .eq("id", user.id);

    setIsEdit(false);
    if (error) {
      toast.error("Could not update profile");
    }
    else{
      toast.success("Your profile has been updated");
    }
  };

  const updatePassword = async () => {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
    setIsEdit(false);
    toast.success("Your password has been updated");
  };
  const cancelUpdate = () => {
    setIsEdit(false);
    setNewFullname(fullname);
    setPassword("");
  };

  const handleDelete = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("auth.users")
      .delete()
      .eq("id", user.id);
    if (error) {
      toast.error("Could not delete user");
    } else {
      router.push("/register");
    }
  };
  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.push("/login");
  };

  return (
    <div className="flex h-full items-center">
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
            <span
              className="mt-3 cursor-pointer rounded-md py-2 px-4 text-red-400 hover:font-semibold"
              onClick={() => setVisible(true)}
            >
              Delete account
            </span>
          </aside>
          <main className="flex h-full w-3/4 flex-col p-4">
            {tab === 0 && (
              <div>
                <Title>Profile settings</Title>
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
                <div className="my-6 flex flex-row items-center">
                  <Subtitle className="w-1/3">Email</Subtitle>
                  <TextInput
                    type="text"
                    disabled={true}
                    value={email}
                  />
                </div>
                <div className="flex flex-row items-center justify-end gap-2">
                  <Button
                    size="xs"
                    variant="secondary"
                    disabled={!isEdit}
                    className="mt-4 w-24 rounded-md border-red-400 px-4 py-2 text-center text-red-400 hover:bg-red-100"
                    onClick={cancelUpdate}
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
                <div className="my-4 flex flex-row items-center">
                  <Subtitle className="w-1/3">New Password</Subtitle>
                  <TextInput
                    placeholder="Enter your new password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
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
                    onClick={cancelUpdate}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="xs"
                    variant="secondary"
                    disabled={!isEdit}
                    className="mt-4 w-24 rounded-md border-indigo-400 px-4 py-2 text-center text-indigo-400 hover:bg-indigo-100"
                    onClick={updatePassword}
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}
            {tab === 2 && (
              <div>
                <Title>Mail server config</Title>
                <div className="my-4 flex flex-row items-center">
                  <Subtitle className="w-1/3">Host</Subtitle>
                  <TextInput
                    placeholder="smtp.example.com"
                    type="text"
                    value="smtp.example.com"
                  />
                </div>
                <div className="my-6 flex flex-row items-center">
                  <Subtitle className="w-1/3">Port</Subtitle>
                  <TextInput
                    type="text"
                    value="587"
                  />
                </div>
                <div className="mb-4 flex flex-row items-center">
                  <Subtitle className="w-1/3">User name</Subtitle>
                  <TextInput
                    placeholder='dummy@example.com'
                    type="text"
                    value='dummy@example.com'
                  />
                </div>
                <div className="my-6 flex flex-row items-center">
                  <Subtitle className="w-1/3">Password</Subtitle>
                  <TextInput
                    type="password"
                    value='dummy_password'
                  />
                </div>
              </div>
            )}

            <Transition appear show={visible} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setVisible(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-medium leading-6 text-red-500"
                        >
                          Deactivate your account
                        </Dialog.Title>
                        <div className="mt-3">
                          <p className="text-base">
                            Are you sure you want to deactivate your account?
                          </p>
                          <p className="text-base">
                            All of your data will be permanently removed. This
                            action cannot be undone.
                          </p>
                        </div>
                        <div className="flex flex-row items-center justify-end gap-2">
                          <Button
                            size="xs"
                            variant="secondary"
                            className="mt-4 w-24 rounded-md border-indigo-400 px-4 py-2 text-center text-indigo-400 hover:bg-indigo-100 focus:outline-none"
                            onClick={() => setVisible(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            size="xs"
                            variant="secondary"
                            className="mt-4 w-24 rounded-md border-red-400 px-4 py-2 text-center text-red-400 hover:bg-red-100 focus:outline-none"
                            onClick={handleDelete}
                          >
                            Delete
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </main>
        </div>
      )}
    </div>
  );
}
