import { Title, Text } from "@tremor/react";
import Search from "@/components/app/search";
import UsersTable from "@/components/app/table";
import { Radio, PauseCircle } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params) {
  const slug = params?.slug;
  return slug;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-3">
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      </div>
      <div className="rounded-3xl bg-green-100 p-2 px-4 h-fit flex flex-row items-center gap-1">
      <Radio className="h-4 w-4 text-green-500" />
        <Text className="text-green-500">Live</Text>
      </div>
      {/* <div className="rounded-3xl bg-red-100 p-2 px-4 h-fit flex flex-row items-center gap-1">
      <PauseCircle className="h-4 w-4 text-red-500" />
        <Text className="text-red-500">Paused</Text>
      </div> */}
      </div>
      <UsersTable />
      <div className="mt-10 flex flex-col items-center justify-center py-2">
        <h1 className="text-xl font-bold text-black">Project Page</h1>
        <p>{post}</p>
      </div>
    </main>
  );
}
