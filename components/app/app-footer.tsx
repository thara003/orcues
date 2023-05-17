import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="w-full border border-gray-200 p-3 text-center text-xs text-white">
      <p className="flex h-10 items-center justify-center p-3 font-mono text-[13px] text-gray-800">
        Built with 💜 by
        <Link href="#" className="pl-2">
          Team Orcues
        </Link>
      </p>
    </footer>
  );
}
