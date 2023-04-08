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
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-xl font-bold text-black">Project Page</h1>
      <p>{post}</p>
    </div>
  );
}
