import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const runtime = 'experimental-edge'

export function middleware(request: NextRequest) {
  let country =
    request.headers.get('cloudfront-viewer-country') ||
    request.headers.get('CloudFront-Viewer-Country')

  if (!country && process.env.NODE_ENV === 'development') {
    country = 'IN'
  }

  if (!country) {
    country = 'UNKNOWN'
  }

  const response = NextResponse.next()

  response.cookies.set('user-country', country, {
    path: '/',
  })

  return response
}

export const config = {
  matcher: ['/work/:path*'],
}
