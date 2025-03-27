import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Check if we're in static export mode
const isStaticExport = process.env.EXPORT_MODE === 'static';

// Use the safe version of jwt-utils that handles both modes
import { verifyToken } from '@/lib/auth/jwt-utils-safe';

// Paths that don't require authentication
const PUBLIC_PATHS = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/refresh',
  '/login',
  '/register',
  '/'
];

// Check if the path starts with any of the public paths
const isPublicPath = (path: string) => {
  return PUBLIC_PATHS.some(publicPath => 
    path === publicPath || path.startsWith(`${publicPath}/`)
  );
};

export function middleware(request: NextRequest) {
  // In static export mode, just pass through without auth checks
  if (isStaticExport) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  
  // Allow public paths
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // For API routes, check the Authorization header
  if (pathname.startsWith('/api/')) {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    
    try {
      const payload = verifyToken(token);
      if (!payload) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    // Continue to API route with validated token
    return NextResponse.next();
  }
  
  // For page routes, check for the token in cookies
  const token = request.cookies.get('token')?.value;
  
  if (!token) {
    // Redirect to login page with the original URL as return_to parameter
    const url = new URL('/login', request.url);
    url.searchParams.set('return_to', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  try {
    const payload = verifyToken(token);
    if (!payload) {
      // Token is invalid or expired, redirect to login
      const url = new URL('/login', request.url);
      url.searchParams.set('return_to', request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  } catch (error) {
    // Error verifying token, redirect to login
    const url = new URL('/login', request.url);
    url.searchParams.set('return_to', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  // Token is valid, continue to the page
  return NextResponse.next();
}

// Configure paths that will trigger this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/|assets/).*)',
  ],
};