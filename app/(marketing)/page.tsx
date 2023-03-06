import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-h-screen">
        <div className="flex flex-col items-center pt-14 justify-center">
          <Image
            src="/images/product-launch.svg"
            alt="Orcues Logo"
            width={500}
            height={500}
          />
          <h1 className="px-8 text-2xl text-center py-8 font-bold text-black">
            We are building{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Orcues
            </span>
            {" "} 🍀
          </h1>
        </div>
      </div>
    </>
  );
}
