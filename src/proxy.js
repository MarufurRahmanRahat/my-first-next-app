import { NextResponse } from 'next/server';


export function proxy(request) {
  // Get the pathname
  const path = request.nextUrl.pathname;


   // Define protected routes
  const isProtectedRoute = 
    path.startsWith('/add-event') || 
    path.startsWith('/manage-events')
   ;


     // Check for auth token (you'll need to set this during login)
  const token = request.cookies.get('auth-token')?.value;


  // Redirect to login if accessing protected route without token
  if (isProtectedRoute && !token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('redirect', path);
    return NextResponse.redirect(url);
  }


   return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    '/add-event/:path*',
    '/manage-events/:path*',
  ],
};