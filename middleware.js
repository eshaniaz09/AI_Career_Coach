import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';


const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/resume(.*)",
    "/ai-cover-letter(.*)",
    "/interview(.*)",
    "/onboarding(.*)",
]);


export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};



// this is middleware.js file for Clerk authentication in Next.js app using Clerk's Next.js SDK.

// steps to use the clerk authentication in out nextjs app:
// 1. install the clerk nextjs sdk by running the command: npm install @clerk/nextjs
// 2. create a middleware.js file in the root directory of the project. and copy the above code in it.
// 3. wrap the app with ClerkProvider in the layout.js file.
// 4. create an account on clerk.dev and create a new application. and get the publishable key and secret key.
// 5. create a .env.local file in the root directory of the project and add the following environment variables:
//    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
//    CLERK_SECRET_KEY=your_secret_key
// 6. now you can use the Clerk authentication in your nextjs app by using the components provided by the @clerk/nextjs package like SignIn, SignUp, UserButton, SignedIn, SignedOut etc.

