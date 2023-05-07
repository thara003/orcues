export default function Home() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-6xl py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="mx-auto max-w-6xl font-display text-4xl font-bold !leading-tight text-zinc-900 sm:text-center sm:text-7xl">
            Revolutionize your email campaigns and newsletters
          </h1>
          <p className="m-auto mt-8 max-w-2xl text-xl text-zinc-600 sm:text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et alias
            earum est possimus vitae suscipit dolorum dolores eligendi
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <button className="md:text-md mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-900 px-5 py-3 text-base font-medium text-white hover:bg-zinc-700 md:py-2 md:px-4">
            Get started
          </button>
          <button className="md:text-md mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-50 px-5 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-100 md:py-2 md:px-4">
            Star us on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}
