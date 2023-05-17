import { Title, Text, Card } from "@tremor/react";
import Search from "@/components/app/search";
import UsersTable from "@/components/app/table";

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
      <Title>Users</Title>
      <Text>
        A list of users retrieved from a MySQL database (PlanetScale).
      </Text>
      <UsersTable />
      <div className="mt-10 flex flex-col items-center justify-center py-2">
        <h1 className="text-xl font-bold text-black">Project Page</h1>
        <p>{post}</p>
      </div>
    </main>
  );
}
