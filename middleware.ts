import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // TODO: Uncomment this when the redirect is proper
  // if (!session) {
  //   let from = req.nextUrl.pathname;
  //   if (req.nextUrl.search) {
  //     from += req.nextUrl.search;
  //   }

  //   return NextResponse.redirect(
  //     new URL(`/login?from=${encodeURIComponent(from)}`, req.url),
  //   );
  // }

  return res;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/analytics/:path*",
    "/preferences/:path*",
    "/campaign/:path*",
  ],
};
