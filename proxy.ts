import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function proxy(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value
  const { pathname } = request.nextUrl

  let isAuthenticated = false
  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET)
      await jwtVerify(token, secret)
      isAuthenticated = true
    } catch {
      isAuthenticated = false
    }
  }

  // 1. Redirection pour la section /admin
  if (pathname.startsWith('/admin') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // 2. Blocage des requêtes API sensibles
  if (
    pathname.startsWith('/api/posts') &&
    ['POST', 'PUT', 'DELETE'].includes(request.method) &&
    !isAuthenticated
  ) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/posts/:path*'],
}