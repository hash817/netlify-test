import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  // return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
}