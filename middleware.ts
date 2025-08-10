import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const PUBLIC_FILE = /\.(.*)$/
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api')) return
  if (pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = '/fr'
    return NextResponse.redirect(url)
  }
}
