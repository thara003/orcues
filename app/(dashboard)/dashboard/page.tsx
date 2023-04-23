import { Title, Text, Card, Grid } from "@tremor/react";
import Search from "@/components/app/search";
import UsersTable from "@/components/app/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>My Projects</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Search />

      <Grid numColsMd={2} className="mt-6 gap-6">
        <Card className="hover:border hover:border-gray-800">
          <Link href="/project/1">
            <div className="h-36">Project 1</div>
          </Link>
        </Card>
        <Card className="hover:border hover:border-gray-800">
          <Link href="/project/1">
            <div className="h-36">Project 2</div>
          </Link>
        </Card>
        <Card className="hover:border hover:border-gray-800">
          <Link href="/project/1">
            <div className="h-36">Project 3</div>
          </Link>
        </Card>
        <Card className="hover:border hover:border-gray-800">
          <Link href="/project/1">
            <div className="h-36">Project 4</div>
          </Link>
        </Card>
      </Grid>
    </main>
  );
}
