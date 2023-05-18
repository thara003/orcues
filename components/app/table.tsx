"use client";

import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  DeltaType,
  MultiSelectBox,
  MultiSelectBoxItem,
} from "@tremor/react";
import { Trash2 } from "lucide-react";
import { useSupabase } from "@/app/supabase-provider";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";

type Users = {
  name: string;
  email: string;
  subscribed_at: Date;
  subscribed: boolean;
};

export default function UsersTable() {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const { supabase } = useSupabase();
  const params = useParams();

  const getCampaigns = async () => {
    let { data: campaigns, error } = await supabase
      .from("campaigns")
      .select("*")
      .eq("id", params.slug);
    if (error){
      toast.error("Could not fetch user data")
    };
    setUsers(campaigns[0]?.users);
  };

  useEffect(() => {
    getCampaigns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUsersSelected = (users: Users) =>
    selectedNames.includes(users.name) || selectedNames.length === 0;

  return (
    <div className="mt-6">
      <MultiSelectBox
        onValueChange={(value) => setSelectedNames(value)}
        placeholder="Select Subscriber..."
        className="max-w-xs"
      >
        {users.map((item) => (
          <MultiSelectBoxItem
            key={item.name}
            value={item.name}
            text={item.name}
          />
        ))}
      </MultiSelectBox>
      <Card className="mt-6">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell >Email Address</TableHeaderCell>
              <TableHeaderCell >
                Subscribed At
              </TableHeaderCell>
              <TableHeaderCell >Status</TableHeaderCell>
              <TableHeaderCell >Action</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .filter((item) => isUsersSelected(item))
              .map((item) => (
                <TableRow key={item.name}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{formatDate(item.subscribed_at)}</TableCell>
                  <TableCell>{item.subscribed ? "subscribed" : "unsubscibed"}</TableCell>
                  <TableCell>
                    <button className="text-red-500 p-2 border rounded-lg border-red-500 bg-red-100">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
